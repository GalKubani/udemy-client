import { actionType, userDataType } from '../utils/types';

export const userDataInitialState: userDataType = {
  user: null,
  token: '',
};

const loginReducer = (
  userData: userDataType,
  action: actionType,
): userDataType => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { user: { ...action.data }, token: action.token };
    case 'LOGOUT_USER':
      return { user: null, token: '' };
    case 'UPDATE_USER':
      return { user: { ...action.data }, token: action.token };
    default:
      return { ...userData };
  }
};
export default loginReducer;
