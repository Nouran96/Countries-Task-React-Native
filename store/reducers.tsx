import { combineReducers } from "redux";
import { authReducer } from "./Auth/reducers";
import { sharedReducer } from "./Shared/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  shared: sharedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
