import React, { useEffect, useState, useRef } from 'react';
import aboutMeImg from '../assets/images/AboutMe.jpeg';
import brandLogo from '../assets/images/brand_logo.jpg';
import DetailFooter from './DetailFooter';
import pythonCertImg from '../assets/Certificate/python_cert.png';
import azureCertImg from '../assets/Certificate/azure_cert.png';
import fabricCertImg from '../assets/Certificate/fabric_cert.png';
import { FaShieldAlt, FaUserSecret, FaNetworkWired, FaLock, FaAward, FaExternalLinkAlt, FaArrowsAltH, FaDragon, FaJava, FaSearch, FaHdd, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
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

// Programming Languages & Web Development (Ordered from strongest to weakest)
const programmingSkills = [
  { icon: <FaHtml5 style={{ color: '#3b82f6' }} />, label: "HTML5", subtitle: "Modern Web Structure & Semantics" },
  { icon: <FaCss3Alt style={{ color: '#60a5fa' }} />, label: "CSS3", subtitle: "Responsive Layouts & Styling" },
  { icon: <SiLua style={{ color: '#38bdf8' }} />, label: "LUA", subtitle: "Fast Extension & Tooling Scripting" },
  { icon: <SiCplusplus style={{ color: '#0284c7' }} />, label: "C++", subtitle: "Systems & Payload Development" },
  { icon: <FaJava style={{ color: '#2563eb' }} />, label: "JAVA", subtitle: "Secure Backend Architecture" },
  { icon: <FaJs style={{ color: '#0ea5e9' }} />, label: "JAVASCRIPT", subtitle: "Dynamic Logic & Interactive UI" },
  { icon: <SiPython style={{ color: '#3b82f6' }} />, label: "PYTHON", subtitle: "Exploit & Tool Scripting / Data Science" }
];

// Cybersecurity & Forensic Tools
const toolSkills = [
  { icon: <FaDragon style={{ color: '#3b82f6' }} />, label: "GHIDRA", subtitle: "Reverse Engineering Suite" },
  { icon: <SiWireshark style={{ color: '#0ea5e9' }} />, label: "WIRESHARK", subtitle: "Packet Inspection & Sniffing" },
  { icon: <FaHdd style={{ color: '#60a5fa' }} />, label: "FTK IMAGER", subtitle: "Disk Acquisition & Triage" },
  { icon: <FaNetworkWired style={{ color: '#38bdf8' }} />, label: "NETWORK MINER", subtitle: "Network Traffic Forensic Analysis" },
  { icon: <FaSearch style={{ color: '#2563eb' }} />, label: "AUTOPSY", subtitle: "Digital Forensics Investigation Platform" },
  { icon: <SiBurpsuite style={{ color: '#0284c7' }} />, label: "BURP SUITE", subtitle: "Web Scanner, Proxy & VAPT" }
];

const AboutDetail = ({ onClose }) => {
  const [animated, setAnimated] = useState(false);
  const certScrollRef = useRef(null);
  const progScrollRef = useRef(null);
  const toolsScrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Helper hook to attach smooth horizontal scroll (wheel + grab/drag)
  const setupHorizontalScroll = (ref) => {
    const el = ref.current;
    if (!el) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeftStart = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (startX - x) * 1.5;
      el.scrollLeft = scrollLeftStart + walk;
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
        el.scrollLeft += delta * 2;
      }
    };

    el.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUpOrLeave);
    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUpOrLeave);
      el.removeEventListener('wheel', handleWheel);
    };
  };

  const handleScrollContainer = (ref, amount) => {
    if (ref && ref.current) {
      ref.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => setupHorizontalScroll(certScrollRef), []);
  useEffect(() => setupHorizontalScroll(progScrollRef), []);
  useEffect(() => setupHorizontalScroll(toolsScrollRef), []);

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
            I am an Information Technology student with a focus on Cyber Security and software development. My journey began with a practical curiosity about system internals. understanding how software, operating systems, and networks operate under the hood to build secure infrastructures.
          </p>
          <p className={`desc anim from-bottom d5 ${animated ? 'show' : ''}`}>
            With practical experience in network analysis, vulnerability assessment, system troubleshooting, and cloud technologies (Microsoft Azure & Fabric), I enjoy solving technical problems and developing reliable applications.
          </p>
        </div>

        {/* Brand Logo Spacer */}
        <div className={`brand-spacer anim from-bottom d5 ${animated ? 'show' : ''}`}>
          <img src={brandLogo} alt="Brand Logo Spacer" />
        </div>

        {/* Core Skills Section */}
        <div className={`cyber-arsenal-section anim from-bottom d5 ${animated ? 'show' : ''}`}>
          <div className="arsenal-header">
            <h2>Core Technical Skills</h2>
          </div>

          {/* Subsection 1: Programming & Web Development */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="arsenal-badge" style={{ marginBottom: 0 }}>PROGRAMMING & WEB</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="nav-arrow-btn" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }} onClick={() => handleScrollContainer(progScrollRef, -330)} title="Scroll Left" aria-label="Scroll Left">&#8592;</button>
                <button className="nav-arrow-btn" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }} onClick={() => handleScrollContainer(progScrollRef, 330)} title="Scroll Right" aria-label="Scroll Right">&#8594;</button>
              </div>
            </div>
            <div className="arsenal-scroll-container" ref={progScrollRef}>
              {programmingSkills.map((skill, idx) => (
                <div className="cyber-node-card" key={idx}>
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

          {/* Subsection 2: Cybersecurity & Forensic Tools */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="arsenal-badge" style={{ marginBottom: 0 }}>SECURITY & FORENSIC TOOLS</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="nav-arrow-btn" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }} onClick={() => handleScrollContainer(toolsScrollRef, -330)} title="Scroll Left" aria-label="Scroll Left">&#8592;</button>
                <button className="nav-arrow-btn" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }} onClick={() => handleScrollContainer(toolsScrollRef, 330)} title="Scroll Right" aria-label="Scroll Right">&#8594;</button>
              </div>
            </div>
            <div className="arsenal-scroll-container" ref={toolsScrollRef}>
              {toolSkills.map((skill, idx) => (
                <div className="cyber-node-card" key={idx}>
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
        </div>

        {/* Licenses & Certifications Section */}
        <div className={`certificates-section anim from-bottom d5 ${animated ? 'show' : ''}`}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ marginBottom: 0 }}>Licenses & Certifications</h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="nav-arrow-btn" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }} onClick={() => handleScrollContainer(certScrollRef, -400)} title="Scroll Left" aria-label="Scroll Left">&#8592;</button>
              <button className="nav-arrow-btn" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }} onClick={() => handleScrollContainer(certScrollRef, 400)} title="Scroll Right" aria-label="Scroll Right">&#8594;</button>
            </div>
          </div>
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

        <DetailFooter />
      </div>
    </div>
  );
};

export default AboutDetail;
