import Cookies from 'js-cookie';
import { userDataType, userType } from '../utils/types';

const USER_DATA = 'user-data';
const USER_NAME = 'user-name';
export const saveUserOnCookie = (userData: userDataType) => {
  const jsonUserData = JSON.stringify(userData);
  Cookies.set(USER_DATA, jsonUserData, {
    expires: 1 / 24,
    sameSite: 'strict',
    secure: true,
  });
};

export const deleteUserFromCookie = () => {
  Cookies.remove(USER_DATA, { secure: true, sameSite: 'strict' });
};

export const getUserFromCookie = (): userDataType | null => {
  const jsonUserData = Cookies.get(USER_DATA);
  if (jsonUserData === undefined) return null;
  return JSON.parse(jsonUserData);
};

export const saveUserNameOnCookie = (name: string, email: string) => {
  const userData = { name, email };
  const jsonUserData = JSON.stringify(userData);
  Cookies.set(USER_NAME, jsonUserData, {
    sameSite: 'strict',
    secure: true,
  });
};

export const deleteUserNameFromCookie = () => {
  Cookies.remove(USER_NAME, { secure: true, sameSite: 'strict' });
};

export const getUserNameFromCookie = (): Partial<userType> | null => {
  const jsonUserData = Cookies.get(USER_NAME);
  if (jsonUserData === undefined) return null;
  return JSON.parse(jsonUserData);
};
