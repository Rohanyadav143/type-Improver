import { useState } from "react";
import styles from "./typingBody.module.css"
import { useNavigate , Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function TypingBody(){
    const [selectedTest, setSelectedTest] = useState(null);

    return(
        <div className={`container-fluid ${styles.mainBox}`}>
            <div className={`row ${styles.firstBox}`}>
                <div className={`col-lg-4 col-md-5 col-sm-7 col-11 ${styles.box2}`}>
                    <h2 className={`container-fluid ${styles.headBody}`}>Watch and Write</h2>
                    <div className={`${styles.imgBox}`}>
                        <div className="text-center">
                            <img src="seeimage.jpg" className={`rounded ${styles.smoothImage}`} alt="Image Description"/>
                        </div>
                    </div>
                    <p className={`${styles.para}`}>
                        <b>Observe closely, write accurately, and refine your skills with every attempt</b>
                        <br></br>Watch with attention and capture details precisely.
                        <br></br>Strengthen your writing by learning from every attempt.
                        <br></br><b>Keep progressing — every word you write is a step towards mastery!</b></p>
                    <button onClick={() => setSelectedTest("watch")} className={`btn btn-warning ${styles.selectBtn}`}>Select Test</button>
                </div>
                <div className={`col-lg-4 col-md-5 col-sm-7 col-11 ${styles.box2}`}>
                    <h2 className={`container-fluid ${styles.headBody}`}>Listen and Write</h2>
                    <div className={`${styles.imgBox}`}>
                        <div className="text-center">
                            <img src="listen.jpg" className={`rounded ${styles.smoothImage}`} alt="Image Description"/>
                        </div>
                    </div>
                    <p className={`${styles.para}`}>
                        <b>Listen attentively, write with clarity, and sharpen your skills with practice.</b>
                        <br></br>Train your ears, enhance your focus, and improve your writing.
                        <br></br>Turn every mistake into a lesson and progress.
                        <br></br><b>Keep going — your skills are growing with every word you write!</b></p>
                    <button onClick={() => setSelectedTest("listen")} className={`btn btn-warning ${styles.selectBtn}`}>Select Test</button>
                </div>
            </div>

            {selectedTest && (
                <div className={styles.modalOverlay}>
                    <div className={`col-lg-4 col-md-5 col-sm-7 col-11 ${styles.modalContent}`}>
                        <button className={styles.closeButton} onClick={() => setSelectedTest(null)}><b>X</b></button>
                        <TestSelect testType={selectedTest} />
                    </div>
                </div>
            )}


        </div>
    );
}

export default TypingBody;

export function TestSelect({testType}){
    const navigate = useNavigate();
    const [time , setTime] = useState("3");
    const[level , setLevel] = useState("B");

    function startTyping(event) {
        event.preventDefault();
        if (testType === "watch") {
            navigate("/watchPage",{state:{time , level}});
        } else if (testType === "listen") {
            navigate("/listenPage",{state:{time , level}});
        }
    }

    return(
        <form onSubmit={startTyping}>
            <h3 className = {styles.headingOne}>CHECK YOUR TYPING SKIIL</h3>
            <img src="keyword.jpg" className={`img-fluid ${styles.imageStyle}`} alt="Responsive image"></img>
            <h4 className = {styles.headingTwo}>SELECT YOUR TEST</h4>
            <select className={styles.time} value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="3">2 Minute Test</option>
                <option value="1">30 Second Test</option>
                <option value="2">1 Minute Test</option>
                <option value="4">3 Minute Test</option>
                <option value="5">5 Minute Test</option>
                <option value="6">10 Minute Test</option>
            </select>
            <select className={styles.time} value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="B">Medium Text</option>
                <option value="A">Easy Text</option>
                <option value="C">Hard Text</option>
            </select>
            <Button type="submit" className={`btn btn-primary ${styles.btnStart}`}>Start</Button>
        </form>
    )   
}