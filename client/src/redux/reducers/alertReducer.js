import { REMOVEALERT, SETALERT } from "../types/alertTypes";

const initialState = [];

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETALERT:
      return [...state, payload];
    case REMOVEALERT:
      return state.filter((err) => err.id !== payload);

    default:
      return state;
  }
};
export default alertReducer;
