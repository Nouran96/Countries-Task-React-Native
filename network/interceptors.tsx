import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import store from "../store";
import { addToken } from "../store/Auth/actions";
import { hideLoader, showLoader, showSnackbar } from "../store/Shared/actions";

export const requestHandler = (req: AxiosRequestConfig): AxiosRequestConfig => {
  const { token } = store.getState().auth;

  if (token && req.headers) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }

  store.dispatch(showLoader());

  return req;
};

export const successHandler = (res: AxiosResponse) => {
  store.dispatch(hideLoader());

  return res;
};

export const errorHandler = (error: AxiosError) => {
  store.dispatch(hideLoader());

  if (error.response?.status === 401) {
    store.dispatch(addToken(null));
  }

  store.dispatch(showSnackbar(error.response?.data.message));

  return Promise.reject({ ...error });
};
