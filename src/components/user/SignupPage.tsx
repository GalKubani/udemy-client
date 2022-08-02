import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SignupInputContainer from './SignupInputContainer';
import { subscribeToSite } from '../../server/db';
import { saveUserNameOnCookie } from '../../cookies/cookies';
import { loginUser } from '../../actions/loginActions';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { LoginContextType } from '../../utils/types';
import { LoginContext } from '../../context/LoginContext';

const SignupPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checkboxMarked, setCheckboxMarked] = useState(false);
  const { updateLoginData } = useContext<LoginContextType>(LoginContext)!;

  const onBlurEmailInput = (e: any) => {
    const emailValue = e.target.value.trim();
    setEmail(emailValue);
  };
  const onBlurPasswordInput = (e: any) => {
    const passwordValue = e.target.value.trim();
    setPassword(passwordValue);
  };
  const onBlurNameInput = (e: any) => {
    const nameValue = e.target.value.trim();
    setName(nameValue);
  };
  const attemptSignup = async (e: any) => {
    e.preventDefault();
    try {
      const userData = await subscribeToSite(email, password, name);
      if (userData.user) {
        saveUserNameOnCookie(userData.user.name, userData.user.email);
        updateLoginData(loginUser(userData.user, userData.token));
        navigate('/home');
      }
    } catch (e) {
      console.log(e);
    }
  };
  const checkboxHandle = () => {
    setCheckboxMarked(!checkboxMarked);
  };
  return (
    <div className="login-page">
      <div className="login-title no-border">Sign up and start learning</div>
      <div className="login-content">
        <form onSubmit={attemptSignup}>
          <SignupInputContainer
            name="Full Name"
            type="text"
            callback={onBlurNameInput}
          />
          <SignupInputContainer
            name="Email"
            type="email"
            callback={onBlurEmailInput}
          />
          <SignupInputContainer
            name="Password"
            type="password"
            callback={onBlurPasswordInput}
          />
          <div className="submit-row">
            <div onClick={checkboxHandle} className="checkbox-wrapper">
              <input
                onChange={() => {}}
                checked={checkboxMarked}
                type="checkbox"
              />
              Send me special offers, personalized recommendations, and learning
              tips
            </div>
            <button type="submit" className="login-button">
              Sign up
            </button>
            By signing up, you agree to our Terms of Use and Privacy Policy.
            <div className="margin-top">
              Already have an account?{' '}
              <NavLink className="login-sign-up" to="/login">
                <span>Log in</span>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
