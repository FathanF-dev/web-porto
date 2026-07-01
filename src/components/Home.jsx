import React, { useEffect, useState } from 'react';
import profileImg from '../assets/images/profile.jpg';

const Home = ({ isActive, goToPage }) => {
  const [animated, setAnimated] = useState(false);
  const [typedName, setTypedName] = useState('');
  const fullName = "Fathan Fatahilah";

  useEffect(() => {
    let typingInterval;
    let startTypingTimer;

    if (isActive) {
      const timer = setTimeout(() => setAnimated(true), 100);

      setTypedName('');

      // Delay typing until the fade-in animation has started
      startTypingTimer = setTimeout(() => {
        typingInterval = setInterval(() => {
          setTypedName((prev) => {
            if (prev.length < fullName.length) {
              return prev + fullName.charAt(prev.length);
            } else {
              clearInterval(typingInterval);
              return prev;
            }
          });
        }, 100);
      }, 500);

      return () => {
        clearTimeout(timer);
        clearTimeout(startTypingTimer);
        clearInterval(typingInterval);
      };
    } else {
      setAnimated(false); // Reset to re-animate on entry
      setTypedName('');
    }
  }, [isActive]);

  return (
    <div className="page-section">
      <style>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blinkCursor 1s step-end infinite;
        }
      `}</style>
      <div className="home-content">
        <div className="home-text">
          <h3 className={`subtitle anim from-bottom d1 ${animated ? 'show' : ''}`}>
            {typedName}<span className="typing-cursor">|</span>
          </h3>
          <h1 className={`anim from-bottom d2 ${animated ? 'show' : ''}`}>
            Cyber Security Enthusiast
          </h1>
          <p className={`description anim from-bottom d3 ${animated ? 'show' : ''}`}>
            Hi! I'm Fathan Fatahilah, a Cyber Security Enthusiast & Ethical Hacker dedicated to safeguarding digital landscapes. I specialize in vulnerability assessment, network defense, penetration testing, and securing modern AI & Cloud infrastructures against evolving threats.
          </p>
          <div className={`home-buttons anim from-bottom d4 ${animated ? 'show' : ''}`}>
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); goToPage(3); }}>Contact Me</a>
          </div>
        </div>

        <div className={`home-image anim from-bottom d2 ${animated ? 'show' : ''}`}>
          <div className="img-wrapper">
            <img src={profileImg} alt="Fathan Fatahilah" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
