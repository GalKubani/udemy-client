import React, { useContext, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { LoginContextType } from '../../utils/types';
import { deleteUserFromCookie } from '../../cookies/cookies';
import { logoutUser } from '../../actions/loginActions';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import OnlineUserLogos from './OnlineUserLogos';

const OnlineUserHeaders = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, updateLoginData } = useContext<LoginContextType>(LoginContext)!;
  const navigate: NavigateFunction = useNavigate();

  const handleMouseEnter = () => {
    setIsUserMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setIsUserMenuOpen(false);
  };
  const handleMouseEnterLearning = () => {
    setIsModalOpen(true);
  };
  const handleMouseLeaveLearning = () => {
    setIsModalOpen(false);
  };
  const onClickLogout = () => {
    updateLoginData(logoutUser());
    deleteUserFromCookie();
    navigate('/home');
  };
  const goToMyLearning = () => {
    navigate('/my-learning');
  };
  return (
    <div className="online-headers">
      <div
        className="pop-up"
        onMouseLeave={handleMouseLeaveLearning}
        onMouseOver={handleMouseEnterLearning}>
        <span onClick={goToMyLearning} className="pop-up-span">
          My learning
        </span>
        {isModalOpen && (
          <div className="modal-container">
            <section className="modal-content">
              <button
                className="modal-button"
                onClick={goToMyLearning}
                type="button">
                Go to My learning
              </button>
            </section>
          </div>
        )}
      </div>
      <OnlineUserLogos />
      <div
        className="pop-up line-height"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="user-area">
          <span>{user.user?.name[0].toUpperCase()}</span>
        </div>
        {isUserMenuOpen && (
          <div className="modal-container user-container">
            <NavLink to="/personal-area">
              <div className="profile-wrapper">
                <span className="initials">
                  {user.user?.name[0].toUpperCase()}
                </span>
                <div className="user-profile-dropdown">
                  <div className="user-profile-name">{user.user?.name}</div>
                  <div className="user-profile-email">{user.user?.email}</div>
                </div>
              </div>
            </NavLink>
            <ul className="user-area-list">
              <li onClick={goToMyLearning}>My learning</li>
              <li>My cart</li>
              <li>Wish list</li>
              <li>Teach on udemy</li>
            </ul>
            <ul className="user-area-list">
              <li>Notifications</li>
              <li>Messages</li>
            </ul>
            <ul className="user-area-list">
              <li>Notifications</li>
              <li>Messages</li>
            </ul>
            <ul className="user-area-list">
              <li>Notifications</li>
              <li>Messages</li>
            </ul>
            <ul className="user-area-list">
              <li>Help</li>
              <li onClick={onClickLogout}>Log out</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineUserHeaders;
