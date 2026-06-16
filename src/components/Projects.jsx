import React, { useEffect, useState } from 'react';

const Projects = ({ isActive, onLearnMore }) => {
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
          <h1 className={`anim from-bottom d1 ${animated ? 'show' : ''}`}>My Projects</h1>
          <div className={`accent-lines anim from-bottom d2 ${animated ? 'show' : ''}`}>
            <span></span>
            <span></span>
          </div>
          <p className={`desc anim from-bottom d3 ${animated ? 'show' : ''}`}>
            Selected works that I've built over the years and currently working on.
            From responsive web applications to full-stack platforms.
          </p>
          <div className={`anim from-bottom d4 ${animated ? 'show' : ''}`}>
            <button className="btn-primary" onClick={onLearnMore}>Learn More</button>
          </div>
        </div>
        <div className={`split-image-container anim from-left d3 ${animated ? 'show' : ''}`}>
          <div className="img-wrapper projects-image-transition">
            <img src="/projects.avif" alt="My Projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
