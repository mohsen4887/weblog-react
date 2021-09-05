import { connect } from "react-redux";
import { Link } from "react-router-dom";
import authService from "../services/authService";

function Header({ title, user }) {
  const logout = () => {
    try {
      authService.logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          وبلاگ من
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                صفحه اصلی
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="categories">
                دسته بندی ها
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="search">
                جستجو
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="about">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {!user?.token && (
            <Link to="/auth" className="btn btn-primary">
              ورود/ثبت نام
            </Link>
          )}
          {!!user?.token && (
            <div className="dropdown">
              <div
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                خوش آمدید، {user?.name}
              </div>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                {user?.isAdmin && (
                  <li>
                    <Link to="/panel" className="dropdown-item">
                      پنل کاربری
                    </Link>
                  </li>
                )}
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
          )}
        </div>
      </div>
    </nav>
  );
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapState, null)(Header);
