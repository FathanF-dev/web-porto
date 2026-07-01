import React, { useEffect, useState } from 'react';
import aboutMeImg from '../assets/images/AboutMe.jpeg';

const About = ({ isActive, onLearnMore }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setAnimated(true), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimated(false);
    }
  }, [isActive]);

  return (
    <div className="page-section">
      <div className="split-layout">
        <div className="split-text-container">
          <h1 className={`anim from-bottom d1 ${animated ? 'show' : ''}`}>About Me</h1>
          <div className={`accent-lines anim from-bottom d2 ${animated ? 'show' : ''}`}>
            <span></span>
            <span></span>
          </div>
          <p className={`desc anim from-bottom d3 ${animated ? 'show' : ''}`}>
            A brief introduction to my journey in cyber security. I am passionate about securing digital ecosystems, identifying critical vulnerabilities, and engineering resilient defenses to protect sensitive systems from sophisticated threat actors.
          </p>
          <div className={`anim from-bottom d4 ${animated ? 'show' : ''}`}>
            <button className="btn-primary" onClick={onLearnMore}>Learn More</button>
          </div>
        </div>
        <div className={`split-image-container anim from-left d3 ${animated ? 'show' : ''}`}>
          <div className="img-wrapper about-image-transition">
            <img src={aboutMeImg} alt="About Me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
