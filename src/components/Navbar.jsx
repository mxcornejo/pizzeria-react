import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Pizzeria Mamma Mia!
        </Link>
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
              <Link className="btn btn-outline-light" to="/">
                🍕 Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light" to="/profile">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light"
                    onClick={() => alert("Logout functionality goes here")}
                  >
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light" to="/login">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light" to="/register">
                    🔐 Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="btn btn-outline-info" to="/cart">
                🛒 Total: $ {formatNumber(total)}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
