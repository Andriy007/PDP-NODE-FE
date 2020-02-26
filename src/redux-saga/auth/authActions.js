import * as types from "./authActionsTypes";

export const loginRequest = data => {
  return { type: types.LOGIN_REQUEST, data };
};
export const signUpRequest = data => {
  return { type: types.SIGN_UP_REQUEST, data}
};

export const logOutRequest = () => {
  return { type: types.LOGOUT_REQUEST}
};
