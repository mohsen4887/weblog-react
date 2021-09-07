import { toast } from "react-toastify";
import http from "./base";

async function getAllCategories() {
  try {
    const { data } = await http.get(`categories`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteCategory(id) {
  try {
    await http.delete(`categories/${id}`);
    toast.success("دسته بندی مورد نظر با موفقیت حذف شد");
  } catch (error) {
    console.log(error);
    let message = "خطا در حذف دسته بندی";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

async function createCategory(title, order, parentId) {
  try {
    const { data } = await http.post(`categories`, {
      title,
      order,
      parentId,
    });
    toast.success("دسته بندی مورد نظر با موفقیت ایجاد شد");
    return data;
  } catch (error) {
    let message = "خطا در ایجاد دسته بندی جدید";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

async function updateCategory(id, title, order, parentId) {
  try {
    await http.post(`categories/${id}`, {
      title,
      order,
      parentId,
    });
    toast.success("دسته بندی مورد نظر با موفقیت ویرایش شد");
  } catch (error) {
    let message = "خطا در ویرایش دسته بندی";
    if (error.response?.data?.Message) {
      message = error.response?.data?.Message;
    }
    toast.error(message);
    throw error;
  }
}

export default {
  getAllCategories,
  deleteCategory,
  createCategory,
  updateCategory,
};
