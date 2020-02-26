import * as types from "./authActionsTypes";

const token = JSON.parse(localStorage.getItem("token") || "{}");

export const initialState = {
  isAuthenticated: !(Object.entries(token).length === 0 && token.constructor === Object),
  email: "",
  token: token,
  error: ""
};

const auth = (state = initialState, action) => {
  switch (action.type) {

    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.response.token,
        error: "",
      };
    case types.LOGIN_REQUEST_ERROR:
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        error: action.error
      };

    case types.LOGOUT_REQUEST:
      return {
        isAuthenticated: false,
        email: "",
        token: "",
        error: "",
      };

    default:
      return state;
  }
};

export default auth;
