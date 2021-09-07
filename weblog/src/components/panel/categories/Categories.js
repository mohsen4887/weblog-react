import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoriesService from "../../../services/categoriesService";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      setLoading(true);
      const data = await categoriesService.getAllCategories();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const onDeleteCategory = async (id) => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("آیا مطمئن هستید؟")) {
        setLoading(true);
        await categoriesService.deleteCategory(id);
        await getCategories();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const renderCategoryRow = (category) => {
    if (category) {
      return (
        <tr key={`category-${category.id}`}>
          <td>{category.id}</td>
          <td>{category.title}</td>
          <td>
            <Link
              to={`/panel/categories/${category.id}/edit`}
              className="btn btn-sm btn-primary me-2"
            >
              ویرایش
            </Link>
            <button
              onClick={() => onDeleteCategory(category.id)}
              className="btn btn-sm btn-danger"
            >
              حذف
            </button>
          </td>
        </tr>
      );
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="p-5 text-center">Loading ...</div>;
    }
    if (categories.length > 0) {
      return (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover text-nowrap">
            <thead>
              <tr>
                <td>#</td>
                <td>عنوان</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                return renderCategoryRow(category);
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="text-center text-grey">
          <i className="fa fa-info fa-4x mb-4" />
          <p>هیچ دسته بندی وجود ندارد</p>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-between mb-4 mb-lg-5">
        <h2 className="m-0">دسته بندی ها</h2>
        <Link className="btn btn-primary" to="/panel/categories/create">
          ایجاد دسته بندی
        </Link>
      </div>
      {renderContent()}
    </div>
  );
}

export default Categories;
