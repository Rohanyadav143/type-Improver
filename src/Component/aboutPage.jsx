import styles from "./about.module.css";
import { 
  FaBolt, FaBookOpen, FaChartLine, FaUserGraduate, FaCode, 
  FaHandsHelping, FaRocket, FaGlobe, FaMedal, FaLightbulb, FaUserTie 
} from "react-icons/fa";
import Footer from "./footer";
import Navbar from "./navbar";

function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      {/* Navbar on top */}
      <Navbar />

      {/* Hero Section */}
      <header className={styles.heroSection}>
        <h2 className={styles.pageTitle}>
          <FaRocket className="me-2" /> About Type-Improver
        </h2>
        <p className={styles.paraImp}>
          <b>Type-Improver</b> is your personal typing coach with real-time tracking, 
          interactive lessons, and a global community to help you type faster and more accurately.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className={styles.sectionBox}>
        <h3 className={styles.sectionTitle}><FaLightbulb /> Our Mission</h3>
        <p>
          To make typing not just a necessity, but a skill that boosts confidence, 
          efficiency, and creativity. We bring technology and learning together 
          to create a fun and rewarding typing experience.
        </p>
      </section>

      <section className={styles.sectionBox}>
        <h3 className={styles.sectionTitle}><FaGlobe /> Our Vision</h3>
        <p>
          To build the world’s most engaging typing platform where learners, professionals, 
          and coders can connect, compete, and grow together—breaking language and speed barriers.
        </p>
      </section>

      {/* Features */}
      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <FaBolt className={styles.featureIcon} />
          <h4>Instant Feedback</h4>
          <p>See your WPM, accuracy & mistakes live while typing.</p>
        </div>
        <div className={styles.featureCard}>
          <FaBookOpen className={styles.featureIcon} />
          <h4>Structured Learning</h4>
          <p>Follow lessons from beginner to advanced level.</p>
        </div>
        <div className={styles.featureCard}>
          <FaChartLine className={styles.featureIcon} />
          <h4>Progress Tracking</h4>
          <p>Visualize your growth with charts & weekly reports.</p>
        </div>
        <div className={styles.featureCard}>
          <FaUserGraduate className={styles.featureIcon} />
          <h4>Students & Professionals</h4>
          <p>Enhance academic and professional efficiency.</p>
        </div>
        <div className={styles.featureCard}>
          <FaCode className={styles.featureIcon} />
          <h4>Coder Friendly</h4>
          <p>Practice code snippets to type faster while programming.</p>
        </div>
        <div className={styles.featureCard}>
          <FaHandsHelping className={styles.featureIcon} />
          <h4>Global Community</h4>
          <p>Connect, compete & improve with other typists worldwide.</p>
        </div>
        <div className={styles.featureCard}>
          <FaMedal className={styles.featureIcon} />
          <h4>Achievements</h4>
          <p>Earn badges and milestones as you improve your typing journey.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className={styles.sectionBox}>
        <h3 className={styles.sectionTitle}><FaMedal /> Why Choose Us?</h3>
        <ul className={styles.listPoints}>
          <li>⚡ Fun, gamified learning experience</li>
          <li>📊 Real-time progress analytics</li>
          <li>🌎 Active typing community & competitions</li>
          <li>💻 Coder-focused practice modules</li>
        </ul>
      </section>

      {/* Our Journey */}
      <section className={styles.sectionBox}>
        <h3 className={styles.sectionTitle}><FaRocket /> Our Journey</h3>
        <p>
          <b>Type-Improver</b> started as a small idea to help students and 
          coders type faster. What began as a simple project is now a complete 
          platform that combines fun, analytics, and smart learning. 
        </p>
      </section>

      {/* Future Plans */}
      <section className={styles.sectionBox}>
        <h3 className={styles.sectionTitle}><FaLightbulb /> Future Plans</h3>
        <p>
          In the future, we aim to add multiplayer typing races, AI-driven 
          personalized lessons, and mobile app support so learners can practice 
          anytime, anywhere.
        </p>
      </section>

      {/* Quote */}
      <blockquote className={styles.quote}>
        “Typing faster isn’t just practice—it’s <b>smart practice</b>.” 💡
      </blockquote>

      {/* Creator Section at Bottom */}
      <section className={styles.creatorSection}>
        <h3><FaUserTie /> Meet the Creator</h3>
        <div className={styles.creatorBox}>
          <img 
            src="" 
            alt="" 
            className={styles.creatorImg} 
          />
          <div>
            <h4>👨‍💻 Rohan Yadav</h4>
            <p>
              I am the <b>sole creator</b> of Type-Improver. From design to 
              development, everything has been built by me with dedication 
              and passion. My goal is to make typing practice smarter and 
              enjoyable for everyone. ✨
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
