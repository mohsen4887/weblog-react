import { toast } from "react-toastify";
import http from "./base";

async function getAllUsers(query = "", sort = "", page = 1, perPage = 15) {
  try {
    const { data } = await http.get(
      `users?query=${query}&sort=${sort}&page=${page}&perPage=${perPage}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    await http.delete(`users/${id}`);
    toast.success("کاربر مورد نظر با موفقیت حذف شد");
  } catch (error) {
    console.log(error);
    let message = "خطا در حذف کاربر";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

async function createUser(name, email, password, isAdmin) {
  try {
    const { data } = await http.post(`users`, {
      name,
      email,
      password,
      isAdmin,
    });
    toast.success("کاربر مورد نظر با موفقیت ایجاد شد");
    return data;
  } catch (error) {
    let message = "خطا در ایجاد کاربر جدید";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

async function getUser(id) {
  try {
    const { data } = await http.get(`users/${id}`);
    return data;
  } catch (error) {
    let message = "خطا در دریافت اطلاعات کاربر";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

async function updateUser(id, name, email, password, isAdmin) {
  try {
    await http.post(`users/${id}`, {
      name,
      email,
      password,
      isAdmin,
    });
    toast.success("کاربر مورد نظر با موفقیت ویرایش شد");
  } catch (error) {
    let message = "خطا در ویرایش اطلاعات کاربر";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

async function uploadImage(image) {
  try {
    const data = new FormData();
    data.append("image", image);
    await http.post(`users/image`, data, {
      "Content-Type": `multipart/form-data;`,
    });
    toast.success("تصویر آزمایشی آپلود شد");
  } catch (error) {
    let message = "خطا در آپلود تصویر";
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
  getUser,
  updateUser,
  uploadImage,
};
