import { Link, useLocation } from "react-router-dom";
import { isActiveRoute } from "../../../navigation/Navigation";
import "./style.scss";

function Sidebar({ open, onToggleSideBar }) {
  const location = useLocation();
  return (
    <div id="sidebar" className={`${open ? "open" : ""}`}>
      <div className="pb-3 border-bottom mb-3 d-sm-none">
        <button
          className="btn btn-secondary"
          onClick={() => onToggleSideBar(false)}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
      <ul>
        <li
          className={`${
            isActiveRoute(location.pathname, "^/panel/users.*") ? "active" : ""
          }`}
        >
          <Link to="/panel/users">
            <span>مدیریت کاربران</span>
          </Link>
        </li>
        <li
          className={`${
            isActiveRoute(location.pathname, "^/panel/categories.*")
              ? "active"
              : ""
          }`}
        >
          <Link to="/panel/categories">
            <span>مدیریت دسته بندی ها</span>
          </Link>
        </li>
        <li
          className={`${
            isActiveRoute(location.pathname, "^/panel/articles.*")
              ? "active"
              : ""
          }`}
        >
          <Link to="/panel/articles">
            <span>مدیریت مقالات</span>
          </Link>
        </li>
        <li
          className={`${
            isActiveRoute(location.pathname, "^/panel/comments.*")
              ? "active"
              : ""
          }`}
        >
          <Link to="/panel/comments">
            <span>مدیریت نظرات</span>
          </Link>
        </li>
        <li
          className={`${
            isActiveRoute(location.pathname, "^/panel/pages.*") ? "active" : ""
          }`}
        >
          <Link to="/panel/pages">
            <span>مدیریت صفحات</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
