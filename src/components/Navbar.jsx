import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Pizzeria Mamma Mia!
        </a>
        <button
          className="navbar-toggler bg-white"
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
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <button
                className="btn btn-outline-light"
                aria-current="page"
                href="#"
              >
                🍕 Home
              </button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light"
                    aria-current="page"
                    href="#"
                  >
                    🔓 Profile
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light"
                    aria-current="page"
                    href="#"
                  >
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light"
                    aria-current="page"
                    href="#"
                  >
                    🔐 Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light"
                    aria-current="page"
                    href="#"
                  >
                    🔐 Register
                  </button>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="btn btn-outline-info" aria-current="page" href="#">
                🛒 Total: $ {formatNumber(total)}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
