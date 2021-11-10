import { ReduxActions } from "../../utils/Shared";
import * as TYPES from "./types";

interface AuthState {
  token: string | null;
}

const INITIAL_VALUES = { token: null };

export const authReducer = (
  state: AuthState = INITIAL_VALUES,
  action: ReduxActions
) => {
  switch (action.type) {
    case TYPES.ADD_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
