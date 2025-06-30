import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState, useRef } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  // Handlers for desktop hover
  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setProductsOpen(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setProductsOpen(false), 120);
  };

  // Handler for click/tap (mobile)
  const handleDropdownClick = (e) => {
    e.preventDefault();
    setProductsOpen((open) => !open);
  };

  return (
    <nav className="navbar seamless-navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/">
            <h2>TechPal</h2>
            {/* <img
              src="/logo.svg"
              alt=" Logo"
              className="navbar__logo-img"
            /> */}
          </Link>
        </div>
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>
        <ul className={`navbar__menu${menuOpen ? " navbar__menu--open" : ""}`}>
          {/* <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li> */}
          <li
            className="navbar__dropdown"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <span
              className="navbar__dropdown-label"
              onClick={handleDropdownClick}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleDropdownClick(e);
              }}
              aria-haspopup="true"
              aria-expanded={productsOpen}
              role="button"
            >
              Products <span className="navbar__dropdown-arrow">▼</span>
            </span>
            <ul
              className={`navbar__dropdown-menu${
                productsOpen ? " navbar__dropdown-menu--open" : ""
              }`}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              style={{ pointerEvents: productsOpen ? "auto" : "none" }}
            >
              <li>
                <NavLink to="/hrms">HRMS</NavLink>
              </li>
              <li>
                <NavLink to="/performance">Performance</NavLink>
              </li>
              <li>
                <NavLink to="/time-management">Time Management</NavLink>
              </li>
              <li>
                <NavLink to="/payroll">Payroll</NavLink>
              </li>
              <li>
                <NavLink to="/recruitment">Recruitment</NavLink>
              </li>
              <li>
                <NavLink to="/employee-benefits">Employee Benefits</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* <li>
            <NavLink to="/solutions">Solutions</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li> */}
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>

          <li>
            <NavLink to="/partnership">Partnership</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="navbar__cta">
          <Link to="/request-demo" className="navbar__demo-btn">
            Request a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
