import { actionType, userDataType } from '../utils/types';

export const loginUser = (
  userData: userDataType,
  token: string,
): actionType => ({
  type: 'LOGIN_USER',
  data: userData,
  token,
});
export const updateUser = (
  userData: userDataType,
  token: string,
): actionType => ({
  type: 'UPDATE_USER',
  data: userData,
  token,
});
export const logoutUser = (): Partial<actionType> => ({
  type: 'LOGOUT_USER',
});
