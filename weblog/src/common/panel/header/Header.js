import { Link } from "react-router-dom";
import authService from "../../../services/authService";
import "./style.scss";
function Header() {
  const logout = () => {
    try {
      authService.logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="header">
      <div>
        <Link className="text-dark" to="/">
          مشاهده وبسایت
        </Link>
      </div>
      <div>
        <div className="dropdown">
          <div
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            خوش آمدید
          </div>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" onClick={logout}>
                خروج
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
