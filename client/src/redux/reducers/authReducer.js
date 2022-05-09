import {
  FAILED,
  IDENTIFIER,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../types/authTypes";

const initialState = {
  auth: false,
  user: null,
  loading: true,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
      // save token to the browser local storage
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        auth: true,
        user: payload.user,
        loading: false,
      };
    case IDENTIFIER:
      return {
        ...state,
        auth: true,
        user: payload,
        loading: false,
      };
    case FAILED:
    // remove token on logout
    case LOGOUT:
      // on logout or failed remove token
      localStorage.removeItem("token");
      return {
        ...state,
        auth: false,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
