import { toast } from "react-toastify";
import http from "./base";

async function login(email, password) {
  try {
    const { data } = await http.post(`auth/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
    let message = "خطا در ورود به حساب کاربری";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

async function register(name, email, password) {
  try {
    const { data } = await http.post(`auth/register`, {
      email,
      password,
      name,
    });
    return data;
  } catch (error) {
    console.log(error);
    let message = "خطا در ثبت نام";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

export default {
  login,
  register,
};
