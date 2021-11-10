import { ReduxActions } from "../../utils/Shared";
import * as TYPES from "./types";

export const addToken = (payload: string | null): ReduxActions => ({
  type: TYPES.ADD_TOKEN,
  payload,
});
