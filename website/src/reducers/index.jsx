import userReducer from "./user";
import counterReducer from "./counter";
import stateReducer from "./state";
import stepReducer from "./step";
import planReducer from "./plan";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  state: stateReducer,
  step: stepReducer,
  plan: planReducer
});

export default allReducers;
