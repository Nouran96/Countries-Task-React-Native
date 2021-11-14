import { AuthFormValues } from "../components/authForm";
import { axiosInstance } from "./api";

export const login = async (data: AuthFormValues) => {
  return await axiosInstance.post(`cognito-login`, data);
};

export const register = async (data: AuthFormValues) => {
  return await axiosInstance.post(`cognito-register`, data);
};

export const getAllCountries = async () => {
  return await axiosInstance.get(`country`);
};
