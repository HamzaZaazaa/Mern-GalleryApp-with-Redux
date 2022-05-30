import axios from "axios";
import { EDIT_USER } from "../types/userTypes";

export const EditUser = (edituser, config) => async (dispatch) => {
  try {
    const res = await axios.put("/api/profile/editname", { edituser }, config);
    dispatch({
      type: EDIT_USER,
      payload: res.data,
    });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
