import { combineReducers } from "redux";

import auth from "./auth/authReducer";
import boardItems from "./board/boardReducer"

const rootReducer = combineReducers({
  auth,
  boardItems
});

export default rootReducer;
