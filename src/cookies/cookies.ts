import Cookies from 'js-cookie';
import { userDataType } from '../utils/types';

const USER_DATA = 'user-data';

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
