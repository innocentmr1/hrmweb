import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer seamless-footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src="/logo-techpalhr.svg"
              alt="Techpal HR Logo"
              className="footer__logo"
            />
            <p className="footer__desc">
              Empowering your business with a unified HR management platform.
              Techpal HR delivers seamless solutions for modern workplaces.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="LinkedIn" className="footer__social-icon">
                in
              </a>
              <a href="#" aria-label="Twitter" className="footer__social-icon">
                X
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="footer__social-icon"
              >
                IG
              </a>
              <a href="#" aria-label="Facebook" className="footer__social-icon">
                FB
              </a>
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__section">
              <h4>Products</h4>
              <ul>
                <li>
                  <Link to="/hrms">HRMS</Link>
                </li>
                <li>
                  <Link to="/performance">Performance</Link>
                </li>
                <li>
                  <Link to="/time-management">Time Management</Link>
                </li>
                <li>
                  <Link to="/payroll">Payroll</Link>
                </li>
                <li>
                  <Link to="/recruitment">Recruitment</Link>
                </li>
                <li>
                  <Link to="/employee-benefits">Employee Benefits</Link>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/partnership">Partnership</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/press">Press</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/ebooks">Ebooks</Link>
                </li>
                <li>
                  <Link to="/glossary">Glossary</Link>
                </li>
              </ul>
            </div>
            <div className="footer__section">
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/sitemap">Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {currentYear} Techpal HR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
