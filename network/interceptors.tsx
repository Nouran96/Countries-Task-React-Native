import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import store from "../store";

export const requestHandler = (req: AxiosRequestConfig): AxiosRequestConfig => {
  const { token } = store.getState().auth;

  if (token && req.headers) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }

  return req;
};

export const successHandler = (res: AxiosResponse) => {
  // console.log(res);
  return res;
};

export const errorHandler = (error: AxiosError) => {
  console.log(error);
  return Promise.reject({ ...error });
};
