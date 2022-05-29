import axios from "axios";
import { GET_POSTS } from "../types/postTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/post/getall");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
