import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../../common/alert/Alert";
import usersService from "../../../services/usersService";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getUsers = async (query = "", sort = "") => {
    try {
      setLoading(true);
      const result = await usersService.getAllUsers(query, sort);
      if (Array.isArray(result.data)) {
        setUsers(result.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onFilterSubmit = (data) => {
    getUsers(data.query, data.sort);
  };

  const onFilterReset = () => {};

  useEffect(() => {
    getUsers();
  }, []);

  const onDeleteUser = async (id) => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("آیا مطمئن هستید؟")) {
        setLoading(true);
        await usersService.deleteUser(id);
        await getUsers();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="p-5 text-center">Loading ...</div>;
    }
    if (users.length > 0) {
      return (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover text-nowrap">
            <thead>
              <tr>
                <td>#</td>
                <td>نام کاربر</td>
                <td>ایمیل کاربر</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={`user-${user.id}`}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        to={`/panel/users/${user.id}/edit`}
                        className="btn btn-sm btn-primary ms-2"
                      >
                        ویرایش
                      </Link>
                      <button
                        onClick={() => onDeleteUser(user.id)}
                        className="btn btn-sm btn-danger"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="text-center text-grey">
          <i className="fa fa-info fa-4x mb-4" />
          <p>هیچ کاربری وجود ندارد</p>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-between mb-4 mb-lg-5">
        <h2 className="m-0">کاربران</h2>
        <Link className="btn btn-primary" to="/panel/users/create">
          ایجاد کاربر
        </Link>
      </div>
      <div className="mb-3">
        <form
          className="row row-cols-lg-auto g-3 align-items-center"
          onSubmit={handleSubmit(onFilterSubmit)}
        >
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              {...register("query")}
              placeholder="جستجو ..."
            />
          </div>

          <div className="col-12">
            <select className="form-select" {...register("sort")}>
              <option value="">مرتب سازی</option>
              <option value="oldest">قدیمی ترین</option>
              <option value="latest">جدیدترین</option>
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              ثبت
            </button>
          </div>
          <div className="col-12">
            <button
              type="button"
              onClick={onFilterReset}
              className="btn btn-light"
            >
              نمایش همه
            </button>
          </div>
        </form>
      </div>
      {renderContent()}
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                قبلی
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                بعدی
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Users;
