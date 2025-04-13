import styles from "./contentBode.module.css";

function ContentBody(){
    return(
        <div className={`container-fluid ${styles.mainBox}`}>
            <div className={`container ${styles.firstBox}`}>
                <h4>Master the Art of Typing with Our Typing Improver App!</h4>
                <p>In today’s fast-paced digital world, efficient typing is not just a skill — it’s a necessity. Whether you're a student, professional, or just someone who wants to improve productivity, our Typing Improver App is designed to help you type faster, more accurately, and effortlessly.</p>
                <h4>Why Should You Learn to Touch-Type?</h4>
                <p>Touch-typing allows you to type without looking at the keyboard, enhancing your speed and accuracy while reducing strain. Strong typing skills improve communication, productivity, and efficiency, making everyday tasks smoother and stress-free. From programming and content creation to professional writing and data entry, mastering typing can open up countless opportunities.</p>
                <h4>Two Powerful Ways to Improve Your Typing</h4>
                <p>Our app provides a dual-mode approach to help you refine your skills in an engaging way : </p>
                <h5>1. See, Write & Track Your Speed</h5>
                <p>In this mode, you can practice typing by viewing passages and replicating them on the screen. The app tracks your typing speed, accuracy, and improvement over time, helping you stay motivated. With real-time feedback, you can identify areas that need more focus and refine your technique gradually.</p>
                <h5>2. Listen & Type for Ultimate Fluency</h5>
                <p>Take your typing practice to the next level with our speak-then-type feature. The app dictates words or sentences aloud, and you type what you hear. This enhances both listening and typing skills simultaneously, making it an excellent tool for those looking to sharpen their reflexes and comprehension speed.</p>
                <h4>Key Features That Make Learning Fun & Effective: </h4>
                <ul>
                    <li><b>Interactive Lessons & Drills </b> – Improve muscle memory with structured exercises.</li>
                    <li><b>Speed & Accuracy Tracking </b> – Monitor progress with real-time reports.</li>
                    <li><b>Typing Challenges & Games </b> – Make learning engaging and competitive.</li>
                    <li><b>Personalized Learning Paths </b> – Adjust difficulty levels as you improve.</li>
                </ul>
                <h5>How Long Will It Take to See Improvement?</h5>
                <p>With consistent practice, users typically notice a significant improvement in just a few weeks. Even dedicating 15-30 minutes a day can help you become a proficient typist in no time. Our app ensures that every session adds value, helping you build speed, accuracy, and confidence effortlessly.</p>
                <h5>Ready to Elevate Your Typing Skills?</h5>
                <p>Join thousands of learners who are transforming their typing abilities with our Typing Improver App. Whether you're learning from scratch or aiming to boost your existing speed, our app provides a fun, interactive, and result-driven experience tailored to your needs.</p>
                <h2 className={styles.startHeading}>Start typing smarter today......</h2>
            </div>
        </div>
    );
}

export default ContentBody;