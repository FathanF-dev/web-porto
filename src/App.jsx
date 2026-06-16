import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const touchStartY = useRef(0);

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
      setDetailPage(page);
    });
  };

  const closeDetail = () => {
    if (!document.startViewTransition) {
      setDetailPage(null);
      return;
    }
    document.startViewTransition(() => {
      setDetailPage(null);
    });
  };

  // Wheel scroll handler
  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e) => {
      if (detailPage !== null) return;
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime < 1000) return;
      lastScrollTime = now;

      if (e.deltaY > 0) {
        goToPage(currentPage + 1);
      } else if (e.deltaY < 0) {
        goToPage(currentPage - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, goToPage]);

  // Touch handlers
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (detailPage !== null) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToPage(currentPage + 1);
        } else {
          goToPage(currentPage - 1);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, goToPage]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (detailPage !== null) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToPage(currentPage + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPage(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, goToPage]);

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

          {/* Scroll indicator - only on first page */}
          {currentPage === 0 && (
            <div className="scroll-indicator">
              <span>Scroll</span>
              <div className="line"></div>
            </div>
          )}
        </>
      ) : detailPage === 'about' ? (
        <AboutDetail onClose={closeDetail} />
      ) : (
        <ProjectsDetail onClose={closeDetail} />
      )}

      <div className="inspired-badge">
        Inspired by <a href="https://www.alvalens.my.id" target="_blank" rel="noopener noreferrer">Alvalens</a>
      </div>
    </>
  );
}

export default App;
