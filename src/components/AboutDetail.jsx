import React, { useEffect, useState } from 'react';

const AboutDetail = ({ onClose }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="detail-page">
      <button className={`back-button anim from-top d1 ${animated ? 'show' : ''}`} onClick={onClose}>
        &larr; Back
      </button>
      <div className="detail-content">
        <div className="detail-image-container">
          <div className="img-wrapper about-image-transition">
            <img src="/AboutMe.jpeg" alt="About Me Detail" />
          </div>
        </div>
        <div className="detail-text-container">
          <h1 className={`anim from-bottom d2 ${animated ? 'show' : ''}`}>More About Me</h1>
          <div className={`accent-lines anim from-bottom d3 ${animated ? 'show' : ''}`}>
            <span></span>
            <span></span>
          </div>
          <p className={`desc anim from-bottom d4 ${animated ? 'show' : ''}`}>
            I am a full stack software engineer with experience building modern web applications.
            My journey started with a fascination for creating things from scratch, and I've
            evolved to architecting complex, scalable systems.
          </p>
          <p className={`desc anim from-bottom d5 ${animated ? 'show' : ''}`}>
            I specialize in React, Node.js, and various cloud technologies. I'm always eager to
            learn new tools and paradigms to improve the quality of my work and the products I build.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
