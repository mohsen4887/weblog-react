import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../../common/alert/Alert";
import usersService from "../../../services/usersService";
import { toast } from "react-toastify";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(true);
      const users = await usersService.getAllUsers();
      if (Array.isArray(users)) {
        setUsers(users);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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
        toast.success("کار بر مورد نظر با موفقیت حذف شد");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("خطا در حذف کاربر");
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
      <h2>کاربران</h2>
      {renderContent()}
    </div>
  );
}

export default Users;
