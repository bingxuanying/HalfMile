import userReducer from "./user";
import stateReducer from "./state";
import stepReducer from "./step";
import planReducer from "./plan";
import resultReducer from "./result";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: userReducer,
  state: stateReducer,
  step: stepReducer,
  plan: planReducer,
  result: resultReducer
});

export default allReducers;
