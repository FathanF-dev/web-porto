import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Contact = ({ isActive }) => {
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
          <h1 className={`anim from-bottom d1 ${animated ? 'show' : ''}`}>Get In Touch</h1>
          <div className={`accent-lines anim from-bottom d2 ${animated ? 'show' : ''}`}>
            <span></span>
            <span></span>
          </div>
          <p className={`desc anim from-bottom d3 ${animated ? 'show' : ''}`}>
            Feel free to contact me if you have any questions or just want to say hi.
          </p>
          <p className={`contact-email anim from-bottom d3 ${animated ? 'show' : ''}`}>
            <a href="mailto:fathanfthlh356@gmail.com">fathanfthlh356@gmail.com</a>
          </p>

          <div className="contact-socials">
            <a href="mailto:fathanfthlh356@gmail.com" className={`social-icon anim from-bottom d1 ${animated ? 'show' : ''}`} aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/FathanF-dev" target="_blank" rel="noopener noreferrer" className={`social-icon anim from-bottom d2 ${animated ? 'show' : ''}`} aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/fatahilahfathan/" target="_blank" rel="noopener noreferrer" className={`social-icon anim from-bottom d3 ${animated ? 'show' : ''}`} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/fathan-fatahilah-b71bb5325" target="_blank" rel="noopener noreferrer" className={`social-icon anim from-bottom d4 ${animated ? 'show' : ''}`} aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://discordapp.com/users/1122685078825349121" target="_blank" rel="noopener noreferrer" className={`social-icon anim from-bottom d5 ${animated ? 'show' : ''}`} aria-label="Discord">
              <FaDiscord />
            </a>
          </div>
        </div>
        <div className={`split-image-container anim from-left d3 ${animated ? 'show' : ''}`}>
          <div className="img-wrapper">
            <img src="/setup.avif" alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
