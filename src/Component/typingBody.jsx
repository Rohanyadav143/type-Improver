import { useState } from "react";
import styles from "./typingBody.module.css";
import { useNavigate } from "react-router-dom";


function TypingBody() {
  const [selectedTest, setSelectedTest] = useState(null);
  const navigate = useNavigate();

  return (
    <div className={styles.mainBox}>
      {/* Floating icons */}
      <div className={`${styles.floatingIcon} ${styles.floatingIcon1}`}>⌨️</div>
      <div className={`${styles.floatingIcon} ${styles.floatingIcon2}`}>🚀</div>
      <div className={`${styles.floatingIcon} ${styles.floatingIcon3}`}>⚡</div>
      <div className={`${styles.floatingIcon} ${styles.floatingIcon4}`}>🖊️</div>

      {/* Page heading */}
      <div className={styles.introBox}>
        <h1>Improve Your Typing Skills</h1>
        <p>Choose a test below to practice and enhance your typing speed and accuracy. Every word you write brings you closer to mastery!</p>
      </div>

      {/* Test cards */}
      <div className={`container ${styles.firstBox}`}>
        <div className={styles.testCard}>
          <div className={styles.cardIcon}>✍️</div>
          <h2 className={styles.headBody}>Watch and Write</h2>
          <img
            src="https://media.istockphoto.com/id/1335969806/photo/teen-girl-using-laptop-in-bed-using-social-media-or-studying.jpg?s=612x612&w=0&k=20&c=ZAgAijdzXvNM_zYl1WSAqXhpEIY6tE4pIakLxAfMTJw="
            className={styles.cardImage}
            alt="Watch and Write"
          />
            <p className={styles.para}>
                <b>👀 Observe closely, write accurately, and refine your skills with every attempt.</b><br />
                ✏️ Strengthen your writing by learning from every attempt.<br />
                <b>🚀 Keep progressing — every word you write is a step towards mastery!</b>
            </p>

          <button onClick={() => setSelectedTest("watch")} className={styles.selectBtn}>Select Test</button>
        </div>

        <div className={styles.testCard}>
          <div className={styles.cardIcon}>🎧</div>
          <h2 className={styles.headBody}>Listen and Write</h2>
          <img
            src="https://previews.123rf.com/images/dolgachov/dolgachov1702/dolgachov170201831/71370992-girl-typing-on-laptop-at-home.jpg"
            className={styles.cardImage}
            alt="Listen and Write"
          />
          <p className={styles.para}>
            <b>👂 Listen attentively, write with clarity, and sharpen your skills with practice.</b><br />
            🎯 Train your ears, enhance your focus, and improve your writing.<br />
            <b>💡 Keep going — your skills are growing with every word you write!</b>
            </p>

          <button onClick={() => setSelectedTest("listen")} className={styles.selectBtn}>Select Test</button>
        </div>
      </div>

      {/* Modal */}
      {selectedTest && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={() => setSelectedTest(null)}>X</button>
            <TestSelect testType={selectedTest} />
          </div>
        </div>
      )}
    </div>
  );
}

export default TypingBody;

// ------------------ TestSelect Component ------------------
export function TestSelect({ testType }) {
  const navigate = useNavigate();
  const [time, setTime] = useState("3");
  const [level, setLevel] = useState("B");

  function startTyping(event) {
    event.preventDefault();
    if (testType === "watch") navigate("/watchPage", { state: { time, level } });
    else navigate("/listenPage", { state: { time, level } });
  }

  return (
    <form onSubmit={startTyping} className={styles.testForm}>
      <h3 className={styles.headingOne}>Check Your Typing Skill</h3>
      <img
        src="https://img.icons8.com/color/96/000000/keyboard.png"
        className={styles.imageStyle}
        alt="Typing"
      />
      <h4 className={styles.headingTwo}>Select Your Test</h4>

      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={styles.selectBox}
      >
        <option value="1">30 Second Test</option>
        <option value="2">1 Minute Test</option>
        <option value="3">2 Minute Test</option>
        <option value="4">3 Minute Test</option>
        <option value="5">5 Minute Test</option>
        <option value="6">10 Minute Test</option>
      </select>

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className={styles.selectBox}
      >
        <option value="A">Easy Text</option>
        <option value="B">Medium Text</option>
        <option value="C">Hard Text</option>
      </select>

      <button type="submit" className={styles.ctaButton}>
        Start Typing 🚀
      </button>
    </form>
  );
}
