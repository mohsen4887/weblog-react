import { toast } from "react-toastify";
import http from "./base";

async function getAllUsers() {
  try {
    const { data } = await http.get("users");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    await http.delete(`users/${id}`);
    toast.success("کار بر مورد نظر با موفقیت حذف شد");
  } catch (error) {
    console.log(error);
    toast.error("خطا در حذف کاربر");
    throw error;
  }
}

async function createUser(name, email) {
  try {
    const { data } = await http.post(`users`, {
      name,
      email,
    });
    toast.success("کار بر مورد نظر با موفقیت ایجاد شد");
    return { data };
  } catch (error) {
    let message = "خطا در ایجاد کاربر جدید";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

export default {
  getAllUsers,
  deleteUser,
  createUser,
};
