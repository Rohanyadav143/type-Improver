import styles from "./imgBody.module.css";

function ImgBody() {
    return(
        <div className={`bg-success p-2 text-dark bg-opacity-50 container-fluid ${styles.mainCont}`}>
            <div className={`row ${styles.mainRow}`}>
                <div className={`col-md-4 offset-md-2 col-sm-6 ${styles.imgBox}`}>
                    <div className="text-center">
                        <img src="image.jpg" className={`rounded ${styles.smoothImage}`} alt="Image Description"/>
                    </div>
                </div>
                <div className={`col-md-4 col-sm-6 ${styles.contBox}`}>
                    <h1 className={styles.mainHeading}>Boost Your Typing Speed</h1>
                    <p className={styles.contentPara}>
                        Master the art of typing with precision and speed! Start your journey today and transform the way you type.
                    </p>
                    <ul className={styles.ulll}> 
                        <li><b>⚡ Boost your typing speed and accuracy </b>— one keystroke at a time.</li>
                        <li><b>💡 Type faster, work smarter</b> — unlock your full potential with us.</li>
                        <li><b>🚀 Turn your fingers into lightning </b> — practice, improve, and master typing.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ImgBody;