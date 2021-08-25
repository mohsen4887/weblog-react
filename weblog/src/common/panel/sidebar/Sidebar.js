import { Link } from "react-router-dom";
import "./style.scss";

function Sidebar() {
  return (
    <div id="sidebar">
      <ul>
        <li>
          <Link to="/panel/users">
            <span>مدیریت کاربران</span>
          </Link>
        </li>
        <li>
          <Link to="/panel/categories">
            <span>مدیریت دسته بندی ها</span>
          </Link>
        </li>
        <li>
          <Link to="/panel/articles">
            <span>مدیریت مقالات</span>
          </Link>
        </li>
        <li>
          <Link to="/panel/comments">
            <span>مدیریت نظرات</span>
          </Link>
        </li>
        <li>
          <Link to="/panel/pages">
            <span>مدیریت صفحات</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
