import { AuthFormValues } from "../components/authForm";
import { Country } from "../utils/Shared";
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

export const addCountry = async (data: Country) => {
  return await axiosInstance.post(`country`, data);
};

export const editCountry = async (data: Country) => {
  const { name, ...payload } = data;

  return await axiosInstance.put(`country/${name}`, payload);
};
