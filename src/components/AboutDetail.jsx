import React, { useEffect, useState, useRef } from 'react';
import aboutMeImg from '../assets/images/AboutMe.jpeg';
import pythonCertImg from '../assets/Certificate/python_cert.png';
import azureCertImg from '../assets/Certificate/azure_cert.png';
import fabricCertImg from '../assets/Certificate/fabric_cert.png';
import { FaShieldAlt, FaUserSecret, FaNetworkWired, FaLock, FaAward, FaExternalLinkAlt, FaArrowsAltH, FaDragon, FaJava, FaSearch, FaHdd } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiBurpsuite, SiWireshark, SiLua } from 'react-icons/si';

const certificates = [
  {
    title: "Memulai Pemrograman dengan Python",
    id: "0LZ0Y77EQX65",
    date: "18 Juni 2026",
    validUntil: "18 Juni 2029",
    issuer: "Dicoding Academy",
    url: "https://www.dicoding.com/certificates/0LZ0Y77EQX65",
    image: pythonCertImg
  },
  {
    title: "Membangun Aplikasi Gen AI dengan Microsoft Azure",
    id: "07Z67YY6RPQR",
    date: "14 Juni 2026",
    validUntil: "14 Juni 2029",
    issuer: "Dicoding & Microsoft",
    url: "https://www.dicoding.com/certificates/07Z67YY6RPQR",
    image: azureCertImg
  },
  {
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    id: "07Z67YY1RPQR",
    date: "14 Juni 2026",
    validUntil: "14 Juni 2029",
    issuer: "Dicoding & Microsoft",
    url: "https://www.dicoding.com/certificates/07Z67YY1RPQR",
    image: fabricCertImg
  }
];

const coreSkills = [
  { icon: <FaDragon style={{ color: '#ef4444' }} />, label: "GHIDRA", tag: "REV-ENG", subtitle: "Reverse Engineering Suite" },
  { icon: <SiPython style={{ color: '#3b82f6' }} />, label: "PYTHON", tag: "AUTOMATION", subtitle: "Exploit & Tool Scripting" },
  { icon: <SiCplusplus style={{ color: '#0284c7' }} />, label: "C++", tag: "LOW-LEVEL", subtitle: "Systems & Payload Dev" },
  { icon: <FaJava style={{ color: '#f59e0b' }} />, label: "JAVA", tag: "ENTERPRISE", subtitle: "Secure Backend Architecture" },
  { icon: <FaNetworkWired style={{ color: '#10b981' }} />, label: "NETWORK MINER", tag: "FORENSIC", subtitle: "Network Traffic Analysis" },
  { icon: <SiLua style={{ color: '#60a5fa' }} />, label: "LUA", tag: "SCRIPTING", subtitle: "Fast Extension & Tooling" },
  { icon: <SiBurpsuite style={{ color: '#f97316' }} />, label: "BURP SUITE", tag: "VAPT", subtitle: "Web Scanner & Proxy" },
  { icon: <SiWireshark style={{ color: '#06b6d4' }} />, label: "WIRESHARK", tag: "SNIFFING", subtitle: "Packet Inspection" },
  { icon: <FaSearch style={{ color: '#a855f7' }} />, label: "AUTOPSY", tag: "INVESTIGATE", subtitle: "Digital Forensics Platform" },
  { icon: <FaHdd style={{ color: '#94a3b8' }} />, label: "FTK IMAGER", tag: "EVIDENCE", subtitle: "Disk Acquisition & Triage" }
];

const AboutDetail = ({ onClose }) => {
  const [animated, setAnimated] = useState(false);
  const certScrollRef = useRef(null);
  const skillsScrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = certScrollRef.current;
    if (!el) return;
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 2.5;
      }
    };
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    const el = skillsScrollRef.current;
    if (!el) return;

    let animId;
    let isDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;
    let exactScrollLeft = el.scrollLeft;
    let lastTime = performance.now();
    let isPaused = false;

    const getLoopPoint = () => {
      if (el.children && el.children.length >= coreSkills.length && el.children[coreSkills.length]) {
        return el.children[coreSkills.length].offsetLeft - el.children[0].offsetLeft;
      }
      return 0;
    };

    const step = (now) => {
      if (!el) return;
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (dt < 0.2 && dt > 0) {
        const loopPoint = getLoopPoint();
        if (loopPoint > 0) {
          if (!isDragging && !isPaused) {
            exactScrollLeft += 65 * dt; // Steady auto scroll speed
          }
          if (exactScrollLeft >= loopPoint) {
            exactScrollLeft -= loopPoint;
          } else if (exactScrollLeft < 0) {
            exactScrollLeft += loopPoint;
          }
          el.scrollLeft = exactScrollLeft;
        }
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeftStart = exactScrollLeft;
      el.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (startX - x) * 1.5;
      exactScrollLeft = scrollLeftStart + walk;
      const loopPoint = getLoopPoint();
      if (loopPoint > 0) {
        if (exactScrollLeft >= loopPoint) exactScrollLeft -= loopPoint;
        else if (exactScrollLeft < 0) exactScrollLeft += loopPoint;
      }
      el.scrollLeft = exactScrollLeft;
    };

    const handleMouseUpOrLeave = () => {
      if (isDragging) {
        isDragging = false;
        el.style.cursor = 'grab';
      }
    };

    const handleWheel = (e) => {
      if (e.deltaY !== 0 || e.deltaX !== 0) {
        e.preventDefault();
        const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
        exactScrollLeft += delta * 1.5;
        const loopPoint = getLoopPoint();
        if (loopPoint > 0) {
          if (exactScrollLeft >= loopPoint) exactScrollLeft -= loopPoint;
          else if (exactScrollLeft < 0) exactScrollLeft += loopPoint;
        }
        el.scrollLeft = exactScrollLeft;
      }
    };

    const handleScroll = () => {
      if (isDragging) return;
      const diff = Math.abs(el.scrollLeft - exactScrollLeft);
      if (diff > 5) {
        exactScrollLeft = el.scrollLeft;
        const loopPoint = getLoopPoint();
        if (loopPoint > 0) {
          if (exactScrollLeft >= loopPoint) {
            exactScrollLeft -= loopPoint;
            el.scrollLeft = exactScrollLeft;
          } else if (exactScrollLeft < 0) {
            exactScrollLeft += loopPoint;
            el.scrollLeft = exactScrollLeft;
          }
        }
      }
    };

    const handleTouchStart = () => {
      isPaused = true;
    };

    const handleTouchEnd = () => {
      isPaused = false;
      exactScrollLeft = el.scrollLeft;
    };

    el.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUpOrLeave);
    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('scroll', handleScroll, { passive: true });
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUpOrLeave);
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('scroll', handleScroll);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="detail-page">
      <button className={`back-button anim from-top d1 ${animated ? 'show' : ''}`} onClick={onClose}>
        &larr; Back
      </button>
      <div className="detail-content">
        <div className="detail-image-container">
          <div className="img-wrapper about-image-transition">
            <img src={aboutMeImg} alt="About Me Detail" />
          </div>
        </div>
        <div className="detail-text-container">
          <h1 className={`anim from-bottom d2 ${animated ? 'show' : ''}`}>More About Me</h1>
          <div className={`accent-lines anim from-bottom d3 ${animated ? 'show' : ''}`}>
            <span></span>
            <span></span>
          </div>
          <p className={`desc anim from-bottom d4 ${animated ? 'show' : ''}`}>
            I am an Information Technology student with a focus on Cyber Security and software development. My journey began with a practical curiosity about system internals—understanding how software, operating systems, and networks operate under the hood to build secure infrastructures.
          </p>
          <p className={`desc anim from-bottom d5 ${animated ? 'show' : ''}`}>
            With practical experience in network analysis, vulnerability assessment, system troubleshooting, and cloud technologies (Microsoft Azure & Fabric), I enjoy solving technical problems and developing reliable applications.
          </p>
        </div>

        {/* Core Skills Section */}
        <div className={`cyber-arsenal-section anim from-bottom d5 ${animated ? 'show' : ''}`}>
          <div className="arsenal-header">
            <h2>CORE TECHNICAL SKILLS</h2>
            <p className="arsenal-subtitle">Specialized toolkit engineered for vulnerability research, penetration testing, and digital forensics</p>
          </div>
          <div className="arsenal-scroll-container" ref={skillsScrollRef}>
            {[...coreSkills, ...coreSkills, ...coreSkills, ...coreSkills].map((skill, idx) => (
              <div className="cyber-node-card" key={idx}>
                <div className="node-top-bar">
                  <span className="node-tag">[{skill.tag}]</span>
                  <span className="node-status"></span>
                </div>
                <div className="node-main">
                  <div className="node-icon-glow">
                    <div className="node-icon">{skill.icon}</div>
                  </div>
                  <div className="node-info">
                    <h3 className="node-title">{skill.label}</h3>
                    <span className="node-subtitle">{skill.subtitle}</span>
                  </div>
                </div>
                <div className="node-bottom-line"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Licenses & Certifications Section */}
        <div className={`certificates-section anim from-bottom d5 ${animated ? 'show' : ''}`}>
          <h2>Licenses & Certifications</h2>
          <div className="cert-scroll-container" ref={certScrollRef}>
            {certificates.map((cert, index) => (
              <div className="cert-card" key={index}>
                <div className="cert-img-wrapper">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className="cert-content">
                  <div className="cert-header">
                    <span className="cert-badge"><FaAward style={{ marginRight: '4px' }} /> Certified</span>
                    <span className="cert-id">{cert.id}</span>
                  </div>
                  <h3>{cert.title}</h3>
                  <div className="cert-meta">{cert.issuer} • {cert.date}</div>
                </div>
                <div className="cert-actions">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn-more-detail">
                    More Detail &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
