import React, { useContext, useState } from 'react';
import HeaderPopUp from '../main/HeaderPopUp';
import { LoginContext } from '../../context/LoginContext';
import { LoginContextType } from '../../utils/types';
import { deleteUserFromCookie } from '../../cookies/cookies';
import { logoutUser } from '../../actions/loginActions';
import { useNavigate, NavigateFunction } from 'react-router-dom';

const OnlineUserHeaders = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, updateLoginData } = useContext<LoginContextType>(LoginContext)!;
  const navigate: NavigateFunction = useNavigate();

  const handleMouseEnter = () => {
    setIsUserMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setIsUserMenuOpen(false);
  };
  const onClickLogout = () => {
    updateLoginData(logoutUser());
    deleteUserFromCookie();
    navigate('/home');
  };
  return (
    <div className="online-headers">
      <HeaderPopUp name="My Learning" />
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
          strokeWidth="1.4"
          stroke="black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </div>
      <div className="logo">
        <svg
          className="logo"
          strokeWidth="1.4"
          stroke="black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0z" />
          <path d="M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707" />
        </svg>
      </div>
      <div
        className="user-area"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <span className="initials">{user.user?.name[0]}</span>
        {isUserMenuOpen && (
          <div className="modal-container">
            <ul className="modal-content">
              <li onClick={onClickLogout}>Log out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineUserHeaders;
