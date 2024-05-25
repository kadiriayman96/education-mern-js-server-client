import React from "react";

const Navbar = () => {
  return (
    <div>
      <section className="bg-primary py-2 d-none d-sm-block"></section>

      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top py-3 d-block"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          transition: "all 0.5s",
          backgroundColor: "white",
        }}
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="assets/img/gallery/logo-n.png" height="45" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="web-development.html"
                >
                  Web Development
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="user-research.html"
                >
                  User Research
                </a>
              </li>
            </ul>
            <a className="btn btn-primary order-1 order-lg-0" href="#!">
              Sign Up
            </a>
            <form className="d-flex my-3 d-block d-lg-none">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            <div className="dropdown d-none d-lg-block">
              <button
                className="btn btn-outline-light ms-2"
                id="dropdownMenuButton1"
                type="submit"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-search text-800"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="dropdownMenuButton1"
                style={{ top: "55px" }}
              >
                <form>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
