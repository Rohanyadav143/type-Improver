import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { FaInfoCircle, FaEnvelope, FaRocket } from "react-icons/fa";

function Navbar({ typingRef }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetStarted = () => {
    if (location.pathname === "/") {
      typingRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToTests: true } });
    }
  };

  return (
    <nav className={`navbar navbar-expand-sm ${styles.navCont}`}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            className={styles.logoImage}
            src="https://www.notta.ai/pictures/how-to-improve-typing-speed-fixed-theme.jpeg"
            alt="logo"
            width="50"
            height="50"
          />
          <span className={styles.appName}>Type-Improver</span>
        </Link>

        <button
          className={`navbar-toggler ${styles.toggBtn}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${styles.navBox}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${styles.linkes}`}>
                <FaInfoCircle className={styles.navIcon} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${styles.linkes}`}>
                <FaEnvelope className={styles.navIcon} /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <button className={`nav-link ${styles.linkes}`} onClick={handleGetStarted}>
                <FaRocket className={styles.navIcon} /> Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
