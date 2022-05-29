import { GET_POSTS } from "../types/postTypes";

const initialState = {
  posts: [],
  post: {},
  loading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    default:
      return state;
  }
};
