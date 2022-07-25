export interface ILoginContextType {
  user: userDataType;
  updateLoginData: (action: actionType) => void;
}

export type userDataType = { user: any; token: string };

export type actionType = {
  type: string;
  data: userDataType;
  token: string;
};
export type contextProps = {
  children: any;
};
