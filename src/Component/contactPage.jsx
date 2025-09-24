import styles from "./contact.module.css";
import { 
  FaEnvelope, FaTwitter, FaFacebook, FaGithub, FaLinkedin, 
  FaPhone, FaMapMarkerAlt, FaClock, FaGlobe, FaLightbulb 
} from "react-icons/fa";
import Footer from "./footer";
import Navbar from "./navbar";

function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <Navbar />

      {/* Hero Section */}
      <header className={styles.heroSection}>
        <h2 className={styles.pageTitle}>
          <FaEnvelope className="me-2" /> Contact Us
        </h2>
        <p className={styles.paraImp}>
          Have questions, suggestions, or need help? Reach out to us and we’ll get back to you as soon as possible.  
          <b>Type-Improver</b> is here to support your typing journey.
        </p>
      </header>

      {/* Contact Grid */}
      <div className={styles.contactGrid}>
        {/* Contact Info Box */}
        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>Get in Touch</h3>
          <p><FaEnvelope className={styles.infoIcon}/> <b>Email:</b> support@typingimprover.com</p>
          <p><FaPhone className={styles.infoIcon}/> <b>Phone:</b> +91-8604626626</p>
          <p><FaGlobe className={styles.infoIcon}/> <b>Website:</b> www.typingimprover.com</p>
          <p><FaMapMarkerAlt className={styles.infoIcon}/> <b>Address:</b> Lucknow, Uttar Pradesh, India</p>
          <p><FaClock className={styles.infoIcon}/> <b>Working Hours:</b> Mon–Sat, 9:00 AM – 7:00 PM</p>

          <div className={styles.socialIcons}>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form className={styles.contactForm}>
          <h3 className={styles.infoTitle}>Send Us a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea rows="6" placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.ctaBtn}>
            Send Message
          </button>
        </form>
      </div>

      {/* Extra Section */}
      <section className={styles.sectionBox}>
        <h3 className={styles.sectionTitle}><FaLightbulb /> How to Reach Us</h3>
        <ul className={styles.listPoints}>
          <li>📧 Use the form above to send any questions or feedback.</li>
          <li>📞 Call us directly during working hours for urgent queries.</li>
          <li>🌐 Visit our website for tips, lessons, and FAQs.</li>
          <li>💻 Follow us on social media for updates and tutorials.</li>
        </ul>
      </section>

      {/* Map Section */}
      <section className={styles.sectionBox}>
        <h3 className={styles.sectionTitle}><FaMapMarkerAlt /> Our Location</h3>
        <p>
          We are based in Lucknow, Uttar Pradesh. Feel free to reach out or visit during our working hours. 
        </p>
        <div className={styles.mapBox}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.337229981429!2d80.9384514!3d26.8466931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd14f37c03b1%3A0x7e8f0c3d2d0d06a!2sLucknow!5e0!3m2!1sen!2sin!4v1695562332000!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{ border: 0, borderRadius: "12px" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
