import React, { useEffect, useState } from 'react';
import projectsImg from '../assets/images/projects.avif';
import benerin1 from '../assets/images/benerin1.jpg';
import benerin2 from '../assets/images/benerin2.jpg';
import benerin3 from '../assets/images/benerin3.png';
import wumpusImg from '../assets/images/wumpus.png';
import robloxEdu1 from '../assets/images/roblox_edu1.png';
import robloxEdu2 from '../assets/images/roblox_edu2.png';
import robloxEdu3 from '../assets/images/roblox_edu3.png';
import robloxEdu4 from '../assets/images/roblox_edu4.png';


const ProjectsDetail = ({ onClose }) => {
  const [animated, setAnimated] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeFolder, setActiveFolder] = useState(0);

  const folders = [
    { id: 1, img: benerin1, title: '📁 Booth & Team', caption: 'Our service booth during the Economic Survival exhibition project' },
    { id: 2, img: benerin2, title: '📁 Customer Service', caption: 'Providing direct consultations and laptop cleaning for regular and gaming laptops' },
    { id: 3, img: benerin3, title: '📁 Repasta in Action', caption: 'Carefully replacing thermal paste to maintain optimal laptop temperatures' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setActiveFolder((prev) => (prev + 1) % folders.length);
  };

  const handlePrev = () => {
    setActiveFolder((prev) => (prev - 1 + folders.length) % folders.length);
  };

  const handleFolderClick = (index, diff) => {
    if (diff === 0) {
      // If clicking the front active folder, open lightbox
      setLightboxImg(folders[index].img);
    } else {
      // If clicking a stacked folder behind, bring it to the front
      setActiveFolder(index);
    }
  };

  const [activeRobloxFolder, setActiveRobloxFolder] = useState(0);

  const robloxFolders = [
    { id: 1, img: robloxEdu1, title: '📁 City Quest Exploration', caption: 'Interacting with Wise Man to receive environmental cleaning quests and eco-guardianship guidance' },
    { id: 2, img: robloxEdu2, title: '📁 Urban Waste Clean-Up', caption: 'Locating and picking up scattered bottles and litter across city streets to keep the neighborhood clean' },
    { id: 3, img: robloxEdu3, title: '📁 NPC Dialog & Progression', caption: 'Engaging with character transporters and community leaders to unlock new urban zones and challenges' },
    { id: 4, img: robloxEdu4, title: '📁 Gamified Education', caption: 'Promoting eco-awareness and waste management discipline through rewarding interactive gameplay' }
  ];

  const handleRobloxNext = () => {
    setActiveRobloxFolder((prev) => (prev + 1) % robloxFolders.length);
  };

  const handleRobloxPrev = () => {
    setActiveRobloxFolder((prev) => (prev - 1 + robloxFolders.length) % robloxFolders.length);
  };

  const handleRobloxFolderClick = (index, diff) => {
    if (diff === 0) {
      setLightboxImg(robloxFolders[index].img);
    } else {
      setActiveRobloxFolder(index);
    }
  };


  return (
    <div className="detail-page">
      <button className={`back-button anim from-top d1 ${animated ? 'show' : ''}`} onClick={onClose}>
        &larr; Back
      </button>

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
            <img src={lightboxImg} alt="Preview" />
          </div>
        </div>
      )}

      <div className="detail-content">
        <div className="detail-image-container">
          <div className="img-wrapper projects-image-transition">
            <img src={projectsImg} alt="Projects Detail" />
          </div>
        </div>
        
        <div className="detail-text-container">
          <h1 className={`anim from-bottom d2 ${animated ? 'show' : ''}`}>Detailed Projects</h1>
          <div className={`accent-lines anim from-bottom d3 ${animated ? 'show' : ''}`}>
            <span></span>
            <span></span>
          </div>
          <p className={`desc anim from-bottom d4 ${animated ? 'show' : ''}`}>
            Here you can find more in-depth documentation and highlights of my academic and independent projects. From practical hardware maintenance and interactive 3D game development to autonomous AI algorithms and cybersecurity solutions, each project represents a unique exploration of modern technology and problem-solving.
          </p>
        </div>

        {/* Featured Project Section #1: benerin.aja */}
        <div className={`featured-project-section anim from-bottom d5 ${animated ? 'show' : ''}`}>
          <div className="featured-project-badge">FEATURED COURSE PROJECT</div>
          <div className="featured-project-layout">
            <div className="featured-project-info">
              <div className="project-header">
                <h2>benerin.aja</h2>
                <span className="project-period">September 2024 - December 2024</span>
              </div>
              <p className="project-course-tag">Course: Economic Survival</p>
              <p className="project-desc">
                An entrepreneurship project created for the Economic Survival course, providing hardware maintenance and cleaning services. We offer reliable deep cleaning and thermal paste replacement (repasta) services for standard and gaming laptops to resolve overheating and keep hardware running smoothly.
              </p>
              <div className="project-highlights">
                <span className="highlight-tag">❄️ Deep Cleaning</span>
                <span className="highlight-tag">🔧 Repasta (Thermal Paste)</span>
                <span className="highlight-tag">💻 Regular & Gaming Laptops</span>
                <span className="highlight-tag">🛠️ Hardware Maintenance</span>
              </div>
            </div>

            <div className="stacked-folders-wrapper">
              <div className="stacked-folders">
                {folders.map((folder, idx) => {
                  const diff = (idx - activeFolder + folders.length) % folders.length;
                  return (
                    <div
                      key={folder.id}
                      className={`folder-card folder-pos-${diff}`}
                      onClick={() => handleFolderClick(idx, diff)}
                      title={diff === 0 ? "Click to enlarge photo" : "Click to bring folder to front"}
                    >
                      <div className="folder-tab">
                        <span>{folder.title}</span>
                        {diff === 0 && <span className="zoom-badge">🔍 Zoom</span>}
                      </div>
                      <div className="folder-img-box">
                        <img src={folder.img} alt={folder.title} />
                      </div>
                      <div className="folder-caption">{folder.caption}</div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation controls: arrows only */}
              <div className="folder-navigation">
                <button className="nav-arrow-btn" onClick={handlePrev} title="Previous Folder" aria-label="Previous">
                  &#8592;
                </button>
                <button className="nav-arrow-btn" onClick={handleNext} title="Next Folder" aria-label="Next">
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project Section #2: Wumpus World AI */}
        <div className={`featured-project-section wumpus-section anim from-bottom d5 ${animated ? 'show' : ''}`}>
          <div className="featured-project-badge wumpus-badge">FEATURED AI GAME PROJECT</div>
          <div className="featured-project-layout wumpus-layout">
            <div className="wumpus-showcase-wrapper">
              <div className="wumpus-card" onClick={() => setLightboxImg(wumpusImg)} title="Click to enlarge screenshot">
                <div className="wumpus-tab">
                  <span>🎮 AI Navigation Agent (8x8 Grid)</span>
                  <span className="zoom-badge">🔍 Zoom</span>
                </div>
                <div className="wumpus-img-box">
                  <img src={wumpusImg} alt="Wumpus AI Navigation System" />
                </div>
                <div className="wumpus-caption">Autonomous grid exploration, hazard avoidance, and priority Wumpus hunting</div>
              </div>
            </div>

            <div className="featured-project-info">
              <div className="project-header">
                <h2>Wumpus AI Navigation System</h2>
                <span className="project-period">Academic Assignment Project</span>
              </div>
              <p className="project-course-tag">Course: Artificial Intelligence & Algorithm Design</p>
              <p className="project-desc">
                An autonomous knowledge-based AI game project developed as an academic school assignment. The game features an intelligent agent navigating a hazardous 8x8 grid world. By leveraging the Depth-First Search (DFS) algorithm combined with logical inference, the AI systematically explores unknown cells, detects hidden hazards like pits and the Wumpus, prioritizes hunting targets, and retrieves gold coins with maximum efficiency.
              </p>
              <div className="project-highlights">
                <span className="highlight-tag">🧠 Depth-First Search (DFS)</span>
                <span className="highlight-tag">🤖 Knowledge-Based AI</span>
                <span className="highlight-tag">🗺️ 8x8 Grid Navigation</span>
                <span className="highlight-tag">⚡ Autonomous Decision Making</span>
              </div>
              <div style={{ marginTop: '1.8rem' }}>
                <a href="https://github.com/FathanF-dev/Wumpus-With-Ai-Knowledge" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                  View Repository on GitHub &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project Section #3: Roblox Eco Education Game */}
        <div className={`featured-project-section roblox-section anim from-bottom d5 ${animated ? 'show' : ''}`}>
          <div className="featured-project-badge roblox-badge">FEATURED EDUCATIONAL GAME PROJECT</div>
          <div className="featured-project-layout">
            <div className="featured-project-info">
              <div className="project-header">
                <h2>Project Education: Eco Garbage Collection Game</h2>
                <span className="project-period">Roblox Studio Development</span>
              </div>
              <p className="project-course-tag">Platform: Roblox 3D Engine & Lua Scripting</p>
              <p className="project-desc">
                An interactive 3D educational game developed on Roblox Studio designed to teach players and society the vital importance of environmental care and proper waste management. Set in an immersive urban environment, players take on the role of eco-guardians tasked with exploring city districts, interacting with quest NPCs like the Wise Man, and actively cleaning up scattered trash such as plastic bottles and organic litter. By gamifying waste collection and civic discipline through interactive missions, dialog systems, and leaderboards, this project transforms eco-education into an engaging and impactful gaming experience.
              </p>
              <div className="project-highlights">
                <span className="highlight-tag">♻️ Eco-Awareness Education</span>
                <span className="highlight-tag">🗑️ Interactive Waste Collection</span>
                <span className="highlight-tag">🎮 Roblox Studio & Lua</span>
                <span className="highlight-tag">🏙️ NPC Quest & Dialog System</span>
              </div>
            </div>

            <div className="stacked-folders-wrapper">
              <div className="stacked-folders">
                {robloxFolders.map((folder, idx) => {
                  const diff = (idx - activeRobloxFolder + robloxFolders.length) % robloxFolders.length;
                  return (
                    <div
                      key={folder.id}
                      className={`folder-card folder-pos-${diff}`}
                      onClick={() => handleRobloxFolderClick(idx, diff)}
                      title={diff === 0 ? "Click to enlarge screenshot" : "Click to bring screenshot to front"}
                    >
                      <div className="folder-tab">
                        <span>{folder.title}</span>
                        {diff === 0 && <span className="zoom-badge">🔍 Zoom</span>}
                      </div>
                      <div className="folder-img-box">
                        <img src={folder.img} alt={folder.title} />
                      </div>
                      <div className="folder-caption">{folder.caption}</div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation controls: arrows only */}
              <div className="folder-navigation">
                <button className="nav-arrow-btn" onClick={handleRobloxPrev} title="Previous Screenshot" aria-label="Previous">
                  &#8592;
                </button>
                <button className="nav-arrow-btn" onClick={handleRobloxNext} title="Next Screenshot" aria-label="Next">
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
