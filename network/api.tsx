import axios from "axios";
import { errorHandler, requestHandler, successHandler } from "./interceptors";

export const axiosInstance = axios.create({
  baseURL: `https://5lrh1jxwbe.execute-api.us-east-1.amazonaws.com/dev/`,
});

axiosInstance.interceptors.request.use(requestHandler);

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
