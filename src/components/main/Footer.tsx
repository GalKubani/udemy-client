import React from 'react';
import udemyLogo from '../../assets/logo-udemy-inverted.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/home">
        <img alt="logo" className="udemy-logo" src={udemyLogo} />
      </NavLink>
      <div className="footer__nav">
        <a className="footer-nav" href="/">
          About us
        </a>
        <a href="/">Contact us</a>
      </div>
    </div>
  );
};

export default Footer;
