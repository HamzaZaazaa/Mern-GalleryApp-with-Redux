import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
const rootReducer = combineReducers({
  authReducer,
  alertReducer,
});
export default rootReducer;
