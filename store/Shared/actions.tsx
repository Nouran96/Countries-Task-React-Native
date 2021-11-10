import { ReduxActions } from "../../utils/Shared";
import * as TYPES from "./types";

export const showLoader = (): ReduxActions => ({
  type: TYPES.SHOW_LOADER,
});

export const hideLoader = (): ReduxActions => ({
  type: TYPES.HIDE_LOADER,
});

export const showSnackbar = (payload: string): ReduxActions => ({
  type: TYPES.SHOW_SNACKBAR,
  payload,
});

export const hideSnackbar = (): ReduxActions => ({
  type: TYPES.HIDE_SNACKBAR,
});
