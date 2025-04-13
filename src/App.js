import './App.css';
import Navbar from './Component/navbar';
import ImgBody from './Component/imgBody';
import TypingBody from './Component/typingBody';
import ContentBody from './Component/contentBody';
import Footer from './Component/footer';
import { useRef } from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {

  const typingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTests && typingRef.current) {
      typingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="App">
      <>
        <Navbar typingRef={typingRef} />
        <ImgBody/>
        <div ref={typingRef}>
          <TypingBody />
        </div>
        <ContentBody/>
        <Footer/>
      </>
    </div>
  );
}

export default App;