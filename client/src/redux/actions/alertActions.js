import { REMOVEALERT, SETALERT } from "../types/alertTypes";

export const setAlert = (message, alertType) => (dispatch) => {
  // generate random id
  const id = Math.random();
  dispatch({
    type: SETALERT,
    payload: {
      id,
      message,
      alertType,
    },
  });
  setTimeout(() => {
    dispatch({
      type: REMOVEALERT,
      payload: id,
    });
  }, 5000);
};
