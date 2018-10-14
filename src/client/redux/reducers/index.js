import { combineReducers } from "redux";
import mountsReducer from "./mountsReducer";
import isActive from "./isActive";

export default combineReducers({
  mounts: mountsReducer,
  current: isActive
});
