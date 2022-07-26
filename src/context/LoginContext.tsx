import React, { createContext, useReducer } from 'react';
import loginReducer, { userDataInitialState } from '../reducers/loginReducer';
import { getUserFromCookie } from '../cookies/cookies';
import { actionType, contextProps, LoginContextType } from '../utils/types';

export const LoginContext = createContext<LoginContextType>(null);

const LoginContextProvider = (props: contextProps) => {
  const cookieUserData = getUserFromCookie();

  const [userData, loginDispatch] = useReducer(
    loginReducer,
    cookieUserData || userDataInitialState,
  );

  const updateLoginData = (action: actionType) => loginDispatch(action);
  return (
    <LoginContext.Provider value={{ user: userData, updateLoginData }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
