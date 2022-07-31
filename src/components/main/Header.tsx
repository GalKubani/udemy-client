import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import udemyLogo from '../../assets/logo-udemy.svg';
import SearchBar from './SearchBar';
import HeaderPopUp from './HeaderPopUp';
import { LoginContextType } from '../../utils/types';
import { LoginContext } from '../../context/LoginContext';
import OnlineUserHeaders from '../user/OnlineUserHeaders';

const Header = () => {
  const { user } = useContext<LoginContextType>(LoginContext)!;

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
          <OnlineUserHeaders />
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
