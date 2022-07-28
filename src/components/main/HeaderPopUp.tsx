import React, { useState } from 'react';

type props = {
  name: string;
};
const HeaderPopUp = ({ name }: props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };
  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className="pop-up"
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseEnter}>
      <span className="pop-up-span">{name}</span>
      {isModalOpen && (
        <div className="modal-container">
          <section className="modal-content">
            <div className="modal-text">
              Get your team access to over 16,000 top Udemy courses, anytime,
              anywhere.
            </div>
            <button
              className="modal-button"
              onClick={handleMouseLeave}
              type="button">
              Learn More
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default HeaderPopUp;
