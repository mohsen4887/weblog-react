import { toast } from "react-toastify";
import http from "./base";
import { store } from "../redux/store";
import {
  login as reduxLogin,
  register as reduxRegister,
  logout as reduxLogout,
} from "../redux/actions";

async function login(email, password) {
  try {
    const { data } = await http.post(`auth/login`, {
      email,
      password,
    });
    toast.success("ورود به حساب کاربری با موفقیت انجام شد");
    store.dispatch(reduxLogin(data));
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

async function register(name, email, password, passwordConfirm) {
  try {
    const { data } = await http.post(`auth/register`, {
      name,
      email,
      password,
      passwordConfirm,
    });
    toast.success("ثبت نام با موفقیت انجام شد");
    store.dispatch(reduxRegister(data));
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

function logout() {
  try {
    toast.success("با موفقیت از حساب کاربری خارج شدید");
    store.dispatch(reduxLogout());
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

function isLoggedIn() {
  try {
    const state = store.getState();
    return !!state?.user?.token;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default {
  login,
  register,
  logout,
  isLoggedIn,
};
