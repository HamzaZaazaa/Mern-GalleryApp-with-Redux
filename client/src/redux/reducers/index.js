import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import postReducer from "./postReducer";
const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  postReducer,
});
export default rootReducer;
