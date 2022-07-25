import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet, NavigateFunction } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import { ILoginContextType } from '../utils/types';

type props = {
  children: JSX.Element;
  path: string;
};

const LoginRoute = ({ path, children }: props) => {
  const navigate: NavigateFunction = useNavigate();
  const userData = useContext<ILoginContextType | null>(LoginContext);

  useEffect((): void => {
    if (!userData?.user) navigate(path);
  }, []);
  return children ? children : <Outlet />;
};

export default LoginRoute;
