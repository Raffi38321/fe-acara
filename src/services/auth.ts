import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IRegister, Iactivation, ILogin } from "@/types/auth";

const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
  activation: (payload: Iactivation) =>
    instance.post(`${endpoint.AUTH}/activation`, payload),
  login: (payload: ILogin) => instance.post(`${endpoint.AUTH}/login`, payload),
  getProfileWithToken: (token: string) =>
    instance.get(`${endpoint.AUTH}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default authServices;
