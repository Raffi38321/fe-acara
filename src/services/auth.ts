import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IRegister, Iactivation } from "@/types/auth";

const authServices = {
  register: (payload: IRegister) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
  activation: (payload: Iactivation) =>
    instance.post(`${endpoint.AUTH}/activation`, payload),
};

export default authServices;
