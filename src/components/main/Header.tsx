import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import udemyLogo from '../../assets/logo-udemy.svg';
import SearchBar from './SearchBar';
import HeaderPopUp from './HeaderPopUp';
import { LoginContextType } from '../../utils/types';
import { LoginContext } from '../../context/LoginContext';

const Header = () => {
  const { user } = useContext<LoginContextType>(LoginContext)!;

  const handleLoginClick = () => {};
  const handleSignupClick = () => {};

  return (
    <div className="header-container">
      <div className="header">
        <NavLink to="/home">
          <img alt="logo" className="udemy-logo" src={udemyLogo} />
        </NavLink>
        <div className="header-categories">
          <button className="categories-button">Categories</button>
        </div>
        <SearchBar />
        <HeaderPopUp name="Udemy Business" />
        <HeaderPopUp name="Teach on Udemy" />
        {user.user?.name ? (
          <div>
            <HeaderPopUp name="My Learning" />
            <div className="heart-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="login-button"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </div>
            <div className="notifications-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="login-button"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0z" />
                <path d="M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707" />
              </svg>
            </div>
            <div className="user-area">
              <div className="user-header-content">
                <span className="initials">{user.user.name[0]}</span>
              </div>
              <div>
                <span className="bold">{user.user.name}</span>
                <br />
                {/*<NavLink*/}
                {/*  onClick={onToggleClick}*/}
                {/*  className="header__nav-text"*/}
                {/*  to="/personal-area">*/}
                {/*  {' '}*/}
                {/*  לאזור האישי{' '}*/}
                {/*</NavLink>*/}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <NavLink to="/login">
              <button className="login header-button">Log in</button>
            </NavLink>
            <NavLink to="/sign-up">
              <button className="sign-up header-button">Sign up</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
