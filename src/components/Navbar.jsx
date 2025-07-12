import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState, useRef, useEffect } from "react";

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

  // Close mobile menu when clicking on any link
  const handleMobileMenuClose = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
        setProductsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav className="navbar seamless-navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/" className="navbar__link" onClick={handleMobileMenuClose}>
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
                <NavLink
                  to="/hrms"
                  className="navbar__link navbar__link-underline"
                  onClick={handleMobileMenuClose}
                >
                  HRMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/performance"
                  className="navbar__link navbar__link-underline"
                  onClick={handleMobileMenuClose}
                >
                  {" "}
                  Performance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payroll"
                  className="navbar__link navbar__link-underline"
                  onClick={handleMobileMenuClose}
                >
                  Payroll
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/employee-benefits"
                  className="navbar__link navbar__link-underline"
                  onClick={handleMobileMenuClose}
                >
                  Employee Benefits
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recruitment"
                  className="navbar__link navbar__link-underline"
                  onClick={handleMobileMenuClose}
                >
                  Recruitment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/time-management"
                  className="navbar__link navbar__link-underline"
                  onClick={handleMobileMenuClose}
                >
                  Time Management
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar__link navbar__link-underline"
              onClick={handleMobileMenuClose}
            >
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/solutions">Solutions</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li> */}
          <li>
            <NavLink
              to="/pricing"
              className="navbar__link navbar__link-underline"
              onClick={handleMobileMenuClose}
            >
              Pricing
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/partnership"
              className="navbar__link navbar__link-underline"
              onClick={handleMobileMenuClose}
            >
              Partnership
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar__link navbar__link-underline"
              onClick={handleMobileMenuClose}
            >
              Contact
            </NavLink>
          </li>
          <li className="navbar__mobile-demo">
            <Link
              to="/request-demo"
              className="navbar__demo-btn navbar__link"
              onClick={handleMobileMenuClose}
            >
              Request a Demo
            </Link>
          </li>
        </ul>
        <div className="navbar__cta navbar__cta--desktop">
          <Link to="/request-demo" className="navbar__demo-btn navbar__link">
            Request a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
