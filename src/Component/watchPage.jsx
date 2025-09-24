import { useLocation } from 'react-router-dom';
import styles from "./watchPage.module.css";
import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './navbar';
import Footer from './footer';
import { FaStar, FaRocket, FaThumbsUp } from "react-icons/fa";

function WatchPage() {
    const location = useLocation();
    const { time , level} = location.state || {};
    const [timeRun, setTimeRun] = useState(-1);
    const [isRunning, setIsRunning] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [originalText, setOriginalText] = useState("");
    const [typedText, setTypedText] = useState("");
    const [correctChars, setCorrectChars] = useState(0);
    const [incorrectChars, setIncorrectChars] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [wpm, setWPM] = useState(0);

    const inputRef = useRef(null);
    const textRef = useRef(null);

    const initializeTime = () => {
        const map = { "1": 30, "2": 60, "3": 120, "4": 180, "5": 300 };
        return map[time] || 600;
    };

    useEffect(() => {
        setTimeRun(initializeTime());
    }, [time]);

    useEffect(() => {
        let timer;
        if (isRunning && timeRun > 0) {
            timer = setInterval(() => setTimeRun(prev => prev - 1), 1000);
        }
        if (timeRun === 0 && isRunning) {
            setIsRunning(false);
            setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
            setShowModal(true);
            calculateResults();
        }
        return () => clearInterval(timer);
    }, [isRunning, timeRun]);

    const calculateResults = () => {
        const original = originalText;
        const typed = typedText;

        let correct = 0;
        let incorrect = 0;

        for (let i = 0; i < typed.length; i++) {
            if (typed[i] === original[i]) {
                correct++;
            } else {
                incorrect++;
            }
        }

        const totalTyped = typed.length;
        const accuracy = totalTyped > 0 ? (correct / totalTyped) * 100 : 0;
        const timeInMin = elapsedTime / 60 || 1;
        const wpm = (correct / 5) / timeInMin;
    
        setCorrectChars(correct);
        setIncorrectChars(incorrect);
        setAccuracy(accuracy.toFixed(2));
        setWPM(wpm.toFixed(2));
    };

    const resetAll = () => {
        setIsRunning(false);
        setTypedText("");
        setTimeRun(initializeTime());
        setShowModal(false);
        setCorrectChars(0);
        setIncorrectChars(0);
        setStartTime(null);
        setElapsedTime(0);
        fetchParagraph();

        if (textRef.current) {
            textRef.current.scrollTop = 0;
        }

        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 0);
    };

    const fetchParagraph = () => {
        let apiUrl = "";
        if (level === "A") {
            apiUrl = "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1";
        } else if (level === "B") {
            apiUrl = "https://baconipsum.com/api/?type=meat-and-filler&paras=2";
        } else {
            apiUrl = "https://baconipsum.com/api/?type=meat-and-filler&paras=3";
        }

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setOriginalText(data.join(" ").slice(0, 600)))
            .catch(err => toast.error("Something went wrong loading the text."));
    };

    useEffect(() => {
        fetchParagraph();
    }, [level]);

    const handleTyping = (e) => {
        const value = e.target.value;

        if (!isRunning && value.length === 1) {
            setIsRunning(true);
            setStartTime(Date.now());
        }

        setTypedText(value);

        setTimeout(() => {
            const el = textRef.current;
            if (el) {
                const span = el.querySelector(`.${styles.cursor}`);
                if (span) {
                    const { offsetTop } = span;
                    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
                    if (offsetTop > 2 * lineHeight) {
                        el.scrollTop = offsetTop - lineHeight;
                    }
                }
            }
        }, 0);
    };

    const renderText = () => {
        return originalText.split('').map((char, index) => {
            let className = '';
            if (index < typedText.length) {
                className = typedText[index] === char ? 'correct' : 'incorrect';
            }
            const isCursor = index === typedText.length;
            return (
                <span key={index} className={`${styles.char} ${styles[className]} ${isCursor ? styles.cursor : ""}`}>
                    {char}
                </span>
            );
        });
    };

    const getWPM = () => {
        if (elapsedTime === 0) return 0;
        return Math.round((correctChars / 5) * (60 / elapsedTime));
    };

    return (
        <div className={styles.body}>
            <Navbar />
            <h5 className={styles.timeHead}>
                Time Remaining: <b className={styles.boldCnt}>{!isRunning ? "Start Typing..." : timeRun + "s"}</b>
            </h5>

            <div
                id="textDisplay"
                className={styles.textBox}
                onClick={() => inputRef.current.focus()}
                ref={textRef}
            >
                {renderText()}
            </div>

            <input
                ref={inputRef}
                type="text"
                value={typedText}
                onChange={handleTyping}
                className={styles.hiddenInput}
                autoFocus
            />

            <button onClick={resetAll} className={styles.resetBtn}>Reset</button>

            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>Time's Up! <FaStar className="icon" /></h2>
                        <p><b>Correct Characters : </b> {correctChars} <FaThumbsUp style={{color:"yellow"}}/></p>
                        <p><b>Incorrect Characters : </b> {incorrectChars} <FaRocket style={{color:"aqua"}}/></p>
                        <p><strong>WPM : </strong> {getWPM()}</p>
                        <p>Accuracy : {accuracy}%</p>
                        <button onClick={resetAll} className={styles.resetBtn}>Try Again</button>
                    </div>
                </div>
            )}

            <ToastContainer />
            <Footer />
        </div>
    );
}

export default WatchPage;
