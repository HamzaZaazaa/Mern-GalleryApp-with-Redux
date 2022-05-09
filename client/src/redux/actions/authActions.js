import {
  FAILED,
  IDENTIFIER,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../types/authTypes";
import axios from "axios";
import { setAlert } from "./alertActions";

// navigate as params from handleSubmit function in Signup component
// dispatch from middleware
export const register = (data, navigate) => async (disptatch) => {
  try {
    // Request to the server
    const res = await axios.post("/api/auth/signup", data);
    // dispatch action
    disptatch({
      type: REGISTER,
      payload: res.data,
    });
    // to profile after signup
    // navigate only after success
    navigate("/profile");
  } catch (error) {
    error.response.data.errors.forEach((err) =>
      disptatch(setAlert(err.message, "danger"))
    );
    // failed action
    disptatch({
      type: FAILED,
    });
  }
};
// LOG IN
export const login = (data, navigate) => async (disptatch) => {
  try {
    // Request to the server
    const res = await axios.post("/api/auth/signin", data);
    // dispatch action
    disptatch({
      type: LOGIN,
      payload: res.data,
    });
    // to profile after signin
    // navigate only after success
    navigate("/profile");
  } catch (error) {
    error.response.data.errors.forEach((err) =>
      disptatch(setAlert(err.message, "danger"))
    );
    // failed action
    disptatch({
      type: FAILED,
    });
  }
};
// Identification
export const identifier = () => async (disptatch) => {
  const config = {
    headers: {
      authorized: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/me", config);
    disptatch({
      type: IDENTIFIER,
      payload: res.data,
    });
  } catch (error) {
    disptatch({
      type: FAILED,
    });
  }
};
// LOG OUT
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
