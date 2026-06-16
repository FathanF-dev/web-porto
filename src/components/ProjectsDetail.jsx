import React, { useEffect, useState } from 'react';

const ProjectsDetail = ({ onClose }) => {
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
          <div className="img-wrapper projects-image-transition">
            <img src="/projects.avif" alt="Projects Detail" />
          </div>
        </div>
        <div className="detail-text-container">
          <h1 className={`anim from-bottom d2 ${animated ? 'show' : ''}`}>Detailed Projects</h1>
          <div className={`accent-lines anim from-bottom d3 ${animated ? 'show' : ''}`}>
            <span></span>
            <span></span>
          </div>
          <p className={`desc anim from-bottom d4 ${animated ? 'show' : ''}`}>
            Here you can find more in-depth information about the projects I've worked on. 
            From initial conception and design to architecture and deployment, each project 
            represents a unique challenge and learning opportunity.
          </p>
          <div className={`project-list anim from-bottom d5 ${animated ? 'show' : ''}`}>
            <div className="project-item">
              <h3>Wumpus-With-Ai-Knowledge</h3>
              <p>This project runs automatically with depth-first search. <br /><br /><a href="https://github.com/FathanF-dev/Wumpus-With-Ai-Knowledge" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>View on GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
