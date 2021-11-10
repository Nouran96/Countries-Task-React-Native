import { combineReducers } from "redux";
import { authReducer } from "./Auth/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
