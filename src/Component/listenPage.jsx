import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import styles from "./listenPage.module.css";
import Footer from "./footer";
import Navbar from "./navbar";
import { FiEye, FiEyeOff } from "react-icons/fi";

function ListenPage() {
  const location = useLocation();
  const { time, level } = location.state || {};

  const [timeLeft, setTimeLeft] = useState(0);
  const [text, setText] = useState("");
  const [characters, setCharacters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listeningStarted, setListeningStarted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showPara, setShowPara] = useState(false);
  const [showStartPopup, setShowStartPopup] = useState(true);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [stats, setStats] = useState({
    correct: 0,
    incorrect: 0,
    wpm: 0,
    accuracy: 0,
  });

  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const getApiUrl = () => {
    if (level === "A")
      return "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1";
    if (level === "B")
      return "https://baconipsum.com/api/?type=meat-and-filler&paras=2";
    return "https://baconipsum.com/api/?type=meat-and-filler&paras=3";
  };

  const getTimeDuration = () => {
    const map = { 1: 30, 2: 60, 3: 120, 4: 180, 5: 300 };
    return map[time] || 600;
  };

  const getSpeechRate = () => {
    if (level === "A") return 1;
    if (level === "B") return 2;
    return 3;
  };

  const fetchText = async () => {
    const res = await fetch(getApiUrl());
    const data = await res.json();
    const joined = data.join(" ");
    setText(joined);
    setCharacters(joined.split(""));
  };

  useEffect(() => {
    fetchText();
    setTimeLeft(getTimeDuration());
  }, []);

  useEffect(() => {
    if (listeningStarted && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && listeningStarted) {
      clearInterval(timerRef.current);
      setListeningStarted(false);
      calculateResults();
      setShowResultPopup(true);
      if (speechSynthesis.speaking) speechSynthesis.cancel();
    }
    return () => clearInterval(timerRef.current);
  }, [timeLeft, listeningStarted]);

  const speakCharacters = () => {
    if (!window.speechSynthesis || characters.length === 0) return;

    const specialCharsMap = {
      " ": "space",
      ".": "period",
      ",": "comma",
      ";": "semicolon",
      $: "dollar",
      "?": "question mark",
      "!": "exclamation mark",
      ":": "colon",
      '"': "quote",
      "'": "apostrophe",
      "-": "dash",
      _: "underscore",
    };

    let index = 0;

    const speakNext = () => {
      if (index < characters.length) {
        const char = characters[index];
        const utteranceText = specialCharsMap[char] || char;
        const utter = new SpeechSynthesisUtterance(utteranceText);
        utter.rate = getSpeechRate();
        utter.onend = () => {
          setCurrentIndex((i) => i + 1);
          setTimeout(speakNext, 100);
        };
        speechSynthesis.speak(utter);
        index++;
      }
    };

    speakNext();
  };

  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i]?.toLowerCase() === characters[i]?.toLowerCase())
        correct++;
      else incorrect++;
    }
    const totalTyped = correct + incorrect;
    const minutes = getTimeDuration() / 60;
    const wpm = Math.round(correct / 5 / minutes);
    const accuracy = Math.round((correct / (totalTyped || 1)) * 100);
    setStats({ correct, incorrect, wpm, accuracy });
  };

  const handleReset = async () => {
    if (speechSynthesis.speaking) speechSynthesis.cancel();

    const res = await fetch(getApiUrl());
    const data = await res.json();
    const joined = data.join(" ");
    setText(joined);
    setCharacters(joined.split(""));

    setListeningStarted(true); // Start listening immediately
    setTimeLeft(getTimeDuration()); // Reset timer
    setInputText(""); // Clear input
    setCurrentIndex(0); // Reset index
    setStats({ correct: 0, incorrect: 0, wpm: 0, accuracy: 0 });
    setShowResultPopup(false); // Hide result popup
    setShowStartPopup(false); // Ensure start popup stays hidden

    setTimeout(() => {
      inputRef.current?.focus();
      speakCharacters(); // Start speech immediately
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (speechSynthesis.speaking) speechSynthesis.cancel();
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className={styles.body}>
      <Navbar />

      {/* Start Popup */}
      {showStartPopup && (
        <div className={styles.popupOverlay}>
          <div className={`${styles.popup} ${styles.startPopup}`}>
            <h2>🚀 Welcome to Listen & Write! 🚀</h2>
            <h4>Follow the Basic Steps:</h4>
            <ul className={styles.stepsList}>
              <li>
                🎯 Press <b>Enter</b> to Start.
              </li>
              <li>✍️ Click once in the text area to write.</li>
              <li>👂 Listen Carefully and Write.</li>
              <li>
                🔠 Make sure your <b>CapsLock</b> button is On.
              </li>
            </ul>
            <button
              className={styles.popupBtn}
              onClick={() => {
                setShowStartPopup(false);
                setListeningStarted(true);
                setTimeLeft(getTimeDuration());
                setTimeout(() => {
                  inputRef.current?.focus();
                  speakCharacters();
                }, 100);
              }}
            >
              Let's Go! 🚀
            </button>
          </div>
        </div>
      )}

      {/* Result Popup */}
      {showResultPopup && (
        <div className={styles.popupOverlay}>
          <div className={`${styles.popup} ${styles.resultPopup}`}>
            <h2>⏰ Time's Up! ⏰</h2>
            <div className={styles.statsBox}>
              <p>
                ✅ Correct Characters: <b>{stats.correct}</b>
              </p>
              <p>
                ❌ Incorrect Characters: <b>{stats.incorrect}</b>
              </p>
              <p>
                ⚡ WPM: <b>{stats.wpm}</b>
              </p>
              <p>
                🎯 Accuracy: <b>{stats.accuracy}%</b>
              </p>
            </div>
            <button onClick={handleReset} className={styles.popupBtn}>
              Try Again 🔄
            </button>
          </div>
        </div>
      )}

      <div className={styles.container}>
        <h5 className={styles.timeHead}>
          Time Remaining: <b className={styles.boldCnt}>{timeLeft}s</b>
        </h5>
        <button
          className={styles.toggleBtn}
          onClick={() => setShowPara((p) => !p)}
        >
          {showPara ? <FiEyeOff size={15} /> : <FiEye size={15} />}
        </button>
        {showPara && (
          <div className={styles.paragraphBox}>
            <p>{text}</p>
          </div>
        )}
        <textarea
          ref={inputRef}
          className={styles.typingArea}
          placeholder="Start typing here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={!listeningStarted}
        />
        <button className={styles.resetBtn} onClick={handleReset}>
          Reset
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default ListenPage;
