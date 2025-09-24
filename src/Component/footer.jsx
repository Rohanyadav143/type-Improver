import styles from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaHome, FaStar, FaTags, FaBlog, FaQuestionCircle } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footerMain}>
            {/* Floating icons */}
            <div className={styles.floatingIcon1}>⌨️</div>
            <div className={styles.floatingIcon2}>⭐</div>
            <div className={styles.floatingIcon3}>⚡</div>

            <div className={styles.container}>
                {/* About Section */}
                <div className={styles.footerSection}>
                    <h4>About Type-Improver</h4>
                    <p>
                        Type-Improver is a modern typing practice application designed to help users improve speed, accuracy, and productivity. Learn touch-typing and enhance your professional and academic performance effortlessly.
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h4>Quick Links</h4>
                    <ul className={styles.footerLinks}>
                        <li><FaHome className={styles.linkIcon}/> Home</li>
                        <li><FaStar className={styles.linkIcon}/> Features</li>
                        <li><FaTags className={styles.linkIcon}/> Pricing</li>
                        <li><FaBlog className={styles.linkIcon}/> Blog</li>
                        <li><FaQuestionCircle className={styles.linkIcon}/> FAQ</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className={styles.footerSection}>
                    <h4>Contact Us</h4>
                    <p><FaMapMarkerAlt className={styles.icon}/> 123 Main Street, Lucknow, India</p>
                    <p><FaPhone className={styles.icon}/> +91 98765XXXXX</p>
                    <p><FaEnvelope className={styles.icon}/> xyz@type-improver.com</p>
                </div>

                {/* Social Media & Newsletter */}
                <div className={styles.footerSection}>
                    <h4>Follow Us</h4>
                    <div className={styles.socialIcons}>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                    <h5>Subscribe to Our Newsletter</h5>
                    <div className={styles.newsletter}>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className={styles.bottomFooter}>
                © 2025 Type-Improver. Crafted with ❤️ for better typing speed & accuracy.
            </div>
        </div>
    );
}

export default Footer;
