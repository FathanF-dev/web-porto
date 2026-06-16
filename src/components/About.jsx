import React, { useEffect, useState } from 'react';

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
            A brief introduction to my journey as a software engineer. I'm
            passionate about building products that are not only functional but
            also provide a seamless and visually stunning experience.
          </p>
          <div className={`anim from-bottom d4 ${animated ? 'show' : ''}`}>
            <button className="btn-primary" onClick={onLearnMore}>Learn More</button>
          </div>
        </div>
        <div className={`split-image-container anim from-left d3 ${animated ? 'show' : ''}`}>
          <div className="img-wrapper about-image-transition">
            <img src="/AboutMe.jpeg" alt="About Me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
