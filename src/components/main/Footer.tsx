import React from 'react';
import udemyLogo from '../../assets/logo-udemy-inverted.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-text">
          <span>
            Top companies choose <a>Udemy Business</a> to build in-demand career
            skills.
          </span>
        </div>
        <div className="">
          <img
            alt="Nasdaq"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          />
          <img
            alt="Volkswagen"
            height="44"
            width="44"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          />
          <img
            alt="Box"
            height="44"
            width="67"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          />
          <img
            alt="NetApp"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          />
          <img
            alt="Eventbrite"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          />
        </div>
      </div>
      <div className="footer-section">
        <NavLink to="/home">
          <img alt="logo" className="udemy-logo" src={udemyLogo} />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
