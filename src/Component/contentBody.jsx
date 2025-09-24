import { useNavigate } from "react-router-dom";
import styles from "./contentBode.module.css";
import { FaKeyboard, FaChartLine, FaGamepad, FaUserCog, FaBolt, FaClock, FaSmile, FaStar } from "react-icons/fa";

function ContentBody() {
    const navigate = useNavigate();

    const handleStart = () => {
       navigate("/", { state: { scrollToTests: true } });
    };

    return (
        <div className={styles.mainBox}>
            {/* Floating background icons */}
            <div className={styles.floatingIcon1}>⌨️</div>
            <div className={styles.floatingIcon2}>🎯</div>
            <div className={styles.floatingIcon3}>⚡</div>

            <div className={`container ${styles.firstBox}`}>
                {/* Header */}
                <h2 className={styles.title}>Master the Art of Typing with Our Typing Improver App!</h2>
                <p className={styles.paragraph}>
                    In today’s fast-paced digital world, efficient typing is not just a skill — it’s a necessity. Whether you're a student, professional, or just someone who wants to improve productivity, our Typing Improver App helps you type faster, more accurately, and effortlessly.
                </p>

                {/* Why Learn Touch-Typing */}
                <div className={`${styles.card} ${styles.fadeIn}`}>
                    <div className={styles.cardHeader}>
                        <FaKeyboard className={`${styles.cardIcon} ${styles.iconBounce}`} />
                        <h3>Why Should You Learn to Touch-Type?</h3>
                    </div>
                    <p>
                        Touch-typing allows you to type without looking at the keyboard, enhancing speed and accuracy while reducing strain. Strong typing skills improve communication, productivity, and efficiency, making everyday tasks smoother and stress-free. From programming and content creation to professional writing and data entry, mastering typing can open up countless opportunities.
                    </p>
                    <img className={styles.smallImg} src="https://img.icons8.com/color/96/000000/keyboard.png" alt="keyboard"/>
                </div>

                {/* Two Powerful Ways */}
                <div className={`${styles.card} ${styles.fadeIn}`}>
                    <div className={styles.cardHeader}>
                        <FaBolt className={`${styles.cardIcon} ${styles.iconBounce}`} />
                        <h3>Two Powerful Ways to Improve Your Typing</h3>
                    </div>
                    <p>Our app provides a dual-mode approach to help you refine your skills in an engaging way:</p>
                    <h4><FaClock className={styles.smallIcon}/> 1. See, Write & Track Your Speed</h4>
                    <p>In this mode, you can practice typing by viewing passages and replicating them on the screen. The app tracks your typing speed, accuracy, and improvement over time, helping you stay motivated. With real-time feedback, you can identify areas that need more focus and refine your technique gradually.</p>
                    <h4><FaGamepad className={styles.smallIcon}/> 2. Listen & Type for Ultimate Fluency</h4>
                    <p>Take your typing practice to the next level with our speak-then-type feature. The app dictates words or sentences aloud, and you type what you hear. This enhances both listening and typing skills simultaneously, making it an excellent tool for those looking to sharpen their reflexes and comprehension speed.</p>
                    <FaGamepad className={styles.smallImg} />
                </div>

                {/* Key Features */}
                <div className={`${styles.card} ${styles.fadeIn}`}>
                    <div className={styles.cardHeader}>
                        <FaChartLine className={`${styles.cardIcon} ${styles.iconBounce}`} />
                        <h3>Key Features That Make Learning Fun & Effective</h3>
                    </div>
                    <ul className={styles.featureList}>
                        <li><FaKeyboard className={styles.icon}/> Interactive Lessons & Drills – Improve muscle memory with structured exercises.</li>
                        <li><FaChartLine className={styles.icon}/> Speed & Accuracy Tracking – Monitor progress with real-time reports.</li>
                        <li><FaGamepad className={styles.icon}/> Typing Challenges & Games – Make learning engaging and competitive.</li>
                        <li><FaUserCog className={styles.icon}/> Personalized Learning Paths – Adjust difficulty levels as you improve.</li>
                        <li><FaSmile className={styles.icon}/> Fun Rewards & Badges – Stay motivated with achievements.</li>
                    </ul>
                </div>

                {/* How Long to Improve */}
                <div className={`${styles.card} ${styles.fadeIn}`}>
                    <div className={styles.cardHeader}>
                        <FaClock className={`${styles.cardIcon} ${styles.iconBounce}`} />
                        <h3>How Long Will It Take to See Improvement?</h3>
                    </div>
                    <p>
                        With consistent practice, users typically notice a significant improvement in just a few weeks. 
                        Even dedicating 15–30 minutes a day can help you become a proficient typist in no time. 
                        Our app ensures that every session adds value, helping you build speed, accuracy, and confidence effortlessly.
                    </p>
                    <img 
                        className={styles.smallImg} 
                        src="https://img.icons8.com/color/96/000000/stopwatch.png" 
                        alt="stopwatch"
                    />
                </div>


                {/* Benefits */}
                <div className={`${styles.card} ${styles.fadeIn}`}>
                    <h3>Benefits You’ll Gain:</h3>
                    <ul className={styles.benefitList}>
                        <li><FaStar className={styles.icon}/> Type faster & more accurately</li>
                        <li><FaStar className={styles.icon}/> Improve productivity & focus</li>
                        <li><FaStar className={styles.icon}/> Reduce strain & stress while typing</li>
                        <li><FaStar className={styles.icon}/> Boost career opportunities</li>
                        <li><FaStar className={styles.icon}/> Fun & engaging practice every day</li>
                    </ul>
                </div>

                {/* CTA */}
                <div className={`${styles.card} ${styles.fadeIn}`}>
                    <h3>Ready to Transform Your Typing Skills?</h3>
                    <p>
                        Join thousands of learners who have improved their typing speed, accuracy, and overall productivity. 
                        Whether you’re a beginner or looking to fine-tune your skills, our app makes learning fun and effective.
                    </p>
                    <ul className={styles.benefitList}>
                        <li><FaStar className={styles.icon}/> Track your progress with detailed reports</li>
                        <li><FaStar className={styles.icon}/> Unlock achievements and badges as you improve</li>
                        <li><FaStar className={styles.icon}/> Enjoy daily challenges to stay motivated</li>
                    </ul>
                    <button className={styles.ctaButton} onClick={handleStart}>
                        Start Typing Smarter Today!
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ContentBody;
