import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import eyeLogoShow from '../../assets/eye-logo-show.png';
import eyeLogoHide from '../../assets/eye-logo-hide.png';

type props = {
  callback: (e: any) => void;
  name: string;
  type: string;
};
const SignupInputContainer = ({ callback, name, type }: props) => {
  const [isActive, setActive] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const onClickAnimation = (e: any) => {
    if (e.target.value.length === 0 && !isActive) {
      toggleClass();
    }
  };
  const cbWrapper = (e: any) => {
    if (e.target.value.length === 0) toggleClass();
    callback(e);
  };
  const onInputHandler = (e: any) => {
    if (type === 'password') {
      setPassword(e.target.value);
    }
  };
  return (
    <div>
      <div
        className="signup-input-container"
        onBlur={onClickAnimation}
        onClick={onClickAnimation}>
        <input
          required={true}
          onBlur={cbWrapper}
          onInput={onInputHandler}
          className="sign-up-input"
          type={type !== 'password' ? type : passwordShown ? 'text' : type}
        />
        {type === 'password' && password.length > 0 && (
          <div
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
            className="showPWbutton">
            <img alt="logo" src={passwordShown ? eyeLogoHide : eyeLogoShow} />
          </div>
        )}
        <label
          className={isActive ? 'label-animated active' : 'label-animated'}>
          <span>{name}</span>
        </label>
      </div>
      {type === 'password' && (
        <PasswordStrengthBar
          barColors={['#ddd', '#1c1d1f', '#1c1d1f', '#1c1d1f', '#1c1d1f']}
          shortScoreWord=""
          className="password-strength"
          password={password}
          style={{ width: '70%' }}
          scoreWordStyle={{ position: 'absolute', top: -12, right: -60 }}
        />
      )}
    </div>
  );
};

export default SignupInputContainer;
