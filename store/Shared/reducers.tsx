import { ReduxActions } from "../../utils/Shared";
import * as TYPES from "./types";

interface LoaderState {
  isLoading: boolean;
  isSnackbarVisible: boolean;
  snackbarMsg: string | null;
}

const INITIAL_VALUES = {
  isLoading: false,
  isSnackbarVisible: false,
  snackbarMsg: null,
};

export const sharedReducer = (
  state: LoaderState = INITIAL_VALUES,
  action: ReduxActions
) => {
  switch (action.type) {
    case TYPES.SHOW_LOADER:
      return { ...state, isLoading: true };
    case TYPES.HIDE_LOADER:
      return { ...state, isLoading: false };
    case TYPES.SHOW_SNACKBAR:
      return { ...state, isSnackbarVisible: true, snackbarMsg: action.payload };
    case TYPES.HIDE_SNACKBAR:
      return { ...state, isSnackbarVisible: false, snackbarMsg: null };
    default:
      return state;
  }
};
