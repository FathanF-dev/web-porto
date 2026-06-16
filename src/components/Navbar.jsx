import React from 'react';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode, currentPage, goToPage, sections }) => {
  const icons = [
    { icon: <FaHome />, label: 'Home' },
    { icon: <FaUser />, label: 'About' },
    { icon: <FaFolderOpen />, label: 'Projects' },
    { icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <nav className="left-nav">
      {icons.map((item, i) => (
        <button
          key={sections[i]}
          className={`nav-link ${currentPage === i ? 'active' : ''}`}
          onClick={() => goToPage(i)}
          aria-label={`Go to ${item.label} section`}
        >
          {item.icon}
        </button>
      ))}

      <div className="nav-divider" />

      <button
        className="dark-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
