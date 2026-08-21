import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useScrollNavigation } from './hooks/useScrollNavigation';
import { flushSync } from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutDetail from './components/AboutDetail';
import ProjectsDetail from './components/ProjectsDetail';

const SECTIONS = ['home', 'about', 'projects', 'contact'];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [detailPage, setDetailPage] = useState(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const goToPage = useCallback((index) => {
    if (isAnimating || index < 0 || index >= SECTIONS.length || index === currentPage) return;
    setIsAnimating(true);
    setCurrentPage(index);
    setTimeout(() => setIsAnimating(false), 900);
  }, [isAnimating, currentPage]);

  const navigateToDetail = (page) => {
    if (!document.startViewTransition) {
      setDetailPage(page);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => {
        setDetailPage(page);
      });
    });
  };

  const closeDetail = () => {
    if (!document.startViewTransition) {
      setDetailPage(null);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => {
        setDetailPage(null);
      });
    });
  };

  const isDetailOpen = detailPage !== null;
  useScrollNavigation(currentPage, goToPage, isDetailOpen);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        currentPage={currentPage}
        goToPage={goToPage}
        sections={SECTIONS}
      />

      {detailPage === null ? (
        <>
          <div className="fullpage-wrapper">
            <div
              className="fullpage-inner"
              ref={innerRef}
              style={{ transform: `translateY(-${currentPage * 100}vh)` }}
            >
              <Home isActive={currentPage === 0} goToPage={goToPage} />
              <About isActive={currentPage === 1} onLearnMore={() => navigateToDetail('about')} />
              <Projects isActive={currentPage === 2} onLearnMore={() => navigateToDetail('projects')} />
              <Contact isActive={currentPage === 3} />
            </div>
          </div>
        </>
      ) : detailPage === 'about' ? (
        <AboutDetail onClose={closeDetail} />
      ) : (
        <ProjectsDetail onClose={closeDetail} />
      )}

    </>
  );
}

export default App;
