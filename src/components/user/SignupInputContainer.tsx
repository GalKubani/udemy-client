import React, { useState } from 'react';

type props = {
  callback: (e: any) => void;
  name: string;
  type: string;
};
const SignupInputContainer = ({ callback, name, type }: props) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const onClickAnimation = (e: any) => {
    if (e.target.value.length === 0 && !isActive) {
      toggleClass();
    }
  };
  const cbWrapper = (e: any) => {
    toggleClass();
    callback(e);
  };
  return (
    <div
      className="signup-input-container"
      onBlur={onClickAnimation}
      onClick={onClickAnimation}>
      <input
        required={true}
        onBlur={cbWrapper}
        className="sign-up-input"
        type={type}
      />
      <label className={isActive ? 'label-animated active' : 'label-animated'}>
        <span>{name}</span>
      </label>
    </div>
  );
};

export default SignupInputContainer;
