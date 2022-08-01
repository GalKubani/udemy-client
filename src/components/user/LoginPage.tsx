import React, { useContext, useEffect, useState } from 'react';
import {
  deleteUserNameFromCookie,
  getUserNameFromCookie,
  saveUserNameOnCookie,
} from '../../cookies/cookies';
import { NavLink } from 'react-router-dom';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { LoginContextType, userType } from '../../utils/types';
import LoginOptions from './LoginOptions';
import { loginToDB } from '../../server/db';
import { LoginContext } from '../../context/LoginContext';
import { loginUser } from '../../actions/loginActions';

const LoginPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const { updateLoginData } = useContext<LoginContextType>(LoginContext)!;
  const [userCookieData, setUserCookieData] = useState<Partial<userType>>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const cookieData = getUserNameFromCookie();
    if (!cookieData) return;
    setUserCookieData(cookieData);
    setEmail(cookieData.email as string);
  }, []);
  const onBlueEmailInput = (e: any) => {
    const emailValue = e.target.value.trim();
    setEmail(emailValue);
  };
  const onBluePasswordInput = (e: any) => {
    const passwordValue = e.target.value.trim();
    setPassword(passwordValue);
  };
  const attemptLogin = async (e: any) => {
    e.preventDefault();
    try {
      const userData = await loginToDB(email, password);
      if (userData.user) {
        saveUserNameOnCookie(userData.user.name, userData.user.email);
        updateLoginData(loginUser(userData.user, userData.token));
        navigate('/home');
      }
    } catch (e) {
      alert('Login failed, please check your credentials');
      console.log(e);
    }
  };
  const deleteCookieHandle = () => {
    setUserCookieData({});
    deleteUserNameFromCookie();
  };
  return (
    <div className="login-page">
      <div className="login-title">Log In to Your Udemy Account!</div>
      {userCookieData.name && (
        <div className="welcome-back-container">
          <img
            alt="avatar"
            src="https://img-c.udemycdn.com/user/50x50/anonymous_3.png"
          />
          <span>Welcome back, {userCookieData.name}</span>
        </div>
      )}
      <div className="login-content">
        {!userCookieData.name && <LoginOptions />}
        <form onSubmit={attemptLogin}>
          {!userCookieData.name && (
            <div>
              <input
                required={true}
                onBlur={onBlueEmailInput}
                className="input-email"
                placeholder="Email"
                type="email"
              />
            </div>
          )}
          <div>
            <input
              required={true}
              onBlur={onBluePasswordInput}
              className="input-password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="submit-row">
            <button type="submit" className="login-button">
              Log In
            </button>
            or<span className="forgot-pw"> Forgot Password</span>
            <div className="diff-account" onClick={deleteCookieHandle}>
              Log in to a different account
            </div>
            <div className="margin-top">
              Dont have an account?{' '}
              <NavLink className="login-sign-up" to="/sign-up">
                <span>Sign up</span>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
