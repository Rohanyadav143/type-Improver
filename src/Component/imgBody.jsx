import { useState, useEffect } from "react";
import styles from "./imgBody.module.css";
import { FaKeyboard, FaRocket, FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const images = [
  "https://media.istockphoto.com/id/1335969806/photo/teen-girl-using-laptop-in-bed-using-social-media-or-studying.jpg?s=612x612&w=0&k=20&c=ZAgAijdzXvNM_zYl1WSAqXhpEIY6tE4pIakLxAfMTJw=",
  "https://previews.123rf.com/images/dolgachov/dolgachov1702/dolgachov170201831/71370992-girl-typing-on-laptop-at-home.jpg",
  "https://c8.alamy.com/comp/2M5BH35/close-up-of-a-girls-hands-typing-with-laptop-resting-on-a-meadow-technology-outdoors-2M5BH35.jpg",
  "https://media.gettyimages.com/id/1502881890/photo/redhead-teenage-girl-using-laptop-at-home.jpg?s=612x612&w=gi&k=20&c=dPWnEdPcjw58ijsfhmlEoP8ZaDAZLe9yJQkPbtpaSL0=",
  "https://as2.ftcdn.net/jpg/02/89/83/05/1000_F_289830568_Z4QCGwGDTOsvLRHsc7npjSkcrpsywOoL.jpg"
];

function ImgBody() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    images.forEach(src => new Image().src = src); // Preload
  }, []);

  // Slide every 5 sec with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000); // 5 sec hold
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/", { state: { scrollToTests: true } });
  };

  return (
    <div className={styles.heroSection}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            className={styles.slide}
            key={index}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className={styles.textOverlay}>
        <h1 className={styles.title}>⚡ Transform Your Typing Skills</h1>
        <p className={styles.subtitle}>
          Unlock speed & accuracy with interactive lessons, games, and real-time feedback.
        </p>
        <div className={styles.features}>
          <span><FaKeyboard className={styles.icon}/> Improve speed & accuracy</span>
          <span><FaLightbulb className={styles.icon}/> Track your progress daily</span>
          <span><FaRocket className={styles.icon}/> Fun typing challenges & games</span>
          <span><FaKeyboard className={styles.icon}/> Compete & share results</span>
          <span><FaRocket className={styles.icon}/> Personalized challenges</span>
          <span><FaLightbulb className={styles.icon}/> Earn milestones & badges</span>
        </div>
        <button className={styles.ctaButton} onClick={handleStart}>
          Start Typing Now
        </button>
      </div>
    </div>
  );
}

export default ImgBody;
