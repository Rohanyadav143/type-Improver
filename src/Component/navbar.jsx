import { useState , useRef} from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({typingRef}) {

    const navigate = useNavigate();
    const location = useLocation();
    const scrollToTests =()=>{
        if (location.pathname === "/"){
          typingRef?.current?.scrollIntoView({ behavior: "smooth" });
        } 
        else{
          navigate("/", { state: { scrollToTests: true } });
        }
    };
    const [showAbout , setAbout] = useState(false);
    const [showContact , setContact] = useState(false);

    return( 
        <nav className={`navbar navbar-expand-sm ${styles.navCont}`}>
            <div className="container">
                <Link to ="/" className="navbar-brand">
                    <img className={styles.logoImage} src="https://www.notta.ai/pictures/how-to-improve-typing-speed-fixed-theme.jpeg" alt="error" width="60" height="50"/>
                </Link>
                <Link to="/" className={`navbar-brand ${styles.appName}`}>Type-Improver</Link>
                <button className={`navbar-toggler ${styles.toggBtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${styles.navBox}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className={`nav-link ${styles.linkes}`} href="#" onClick={() => setAbout(true)}>About</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${styles.linkes}`} href="#" onClick={() => setContact(true)}>Contact</button>
                        </li>
                        <li className="nav-item">
                        <button className={`nav-link ${styles.linkes}`} onClick={scrollToTests}>Tests</button>
                        </li>
                    </ul>
                </div>  
            </div>
            {showAbout && (
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <button className={styles.closeButton} onClick={() => setAbout(false)}><b>X</b></button>
                    <h2 className={styles.typeImp}><b>About Typing Improver</b></h2>
                    <p className={styles.paraImp}>Welcome to Typing Improver, your personal space to level up your typing skills and boost your speed and accuracy! Whether you're a student, professional, or just someone who wants to get better at typing, we’ve built this tool to help you reach your goals — fast and efficiently.</p>
                    <h4 className={styles.typeImp}>Our platform offers -</h4>
                    <ul className={styles.paraImp}>
                        <li><b>Real-Time Typing Tests</b> with instant feedback on speed and accuracy</li>
                        <li><b>Dynamic Text Generation</b>to keep practice fresh and challenging</li>
                        <li><b>WPM & Accuracy Tracker</b> to monitor your progress</li>
                        <li><b>Clean, Distraction-Free UI</b> focused on your learning</li>
                        <li><b>Interactive Typing Experience</b> with auto-scrolling text and instant error highlighting</li>
                    </ul>
                    <p className={styles.paraImp}>We believe in making practice effective, fun, and personalized. Typing Improver is lightweight, responsive, and built for everyone who wants to type better—one keystroke at a time.
                    </p>
                    <h3 className={styles.h2Imp}>Start typing today and see how quickly you improve......</h3>
                </div>
            </div>
            )}
            {showContact && (
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <button className={styles.closeButton} onClick={() => setContact(false)}><b>X</b></button>
                    <h2 className={styles.typeImp}><b>Contact Us</b></h2>
                    <p className={styles.paraImp}>
                    Have questions, feedback, or suggestions? We’d love to hear from you!
                    </p>
                    <h4 className={styles.typeImp}>
                    Feel free to reach out through any of the following ways:
                    </h4>
                    <div className={styles.paraImp}>
                    <p><b>Email:</b> support@typingimprover.com</p>
                    <p><b>Phone:</b> +91-8604626626</p>
                    <p><b>Website:</b> www.typingimprover.com</p>
                    <p><b>Address:</b> Typing Improver HQ, Lucknow, Uttar Pradesh, India</p>
                    </div>
                    <h3 className={styles.h2Imp}>Your feedback helps us improve. Let’s build a better typing experience together!</h3>
                </div>
            </div>
            )}
        </nav>
    );
}
export default Navbar;