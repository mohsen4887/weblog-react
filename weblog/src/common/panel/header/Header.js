import { Link } from "react-router-dom";
import "./style.scss";
function Header() {
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
              <a className="dropdown-item active" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
