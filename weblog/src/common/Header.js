import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          وبلاگ من
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                صفحه اصلی
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="categories">
                دسته بندی ها
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="search">
                جستجو
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="about">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
