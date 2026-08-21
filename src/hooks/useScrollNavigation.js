import { useEffect, useRef } from 'react';

export const useScrollNavigation = (currentPage, goToPage, isDetailOpen) => {
  const touchStartY = useRef(0);

  // Wheel scroll handler
  useEffect(() => {
    let lastScrollTime = 0;
    const handleWheel = (e) => {
      if (isDetailOpen) return;
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
  }, [currentPage, goToPage, isDetailOpen]);

  // Touch handlers
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isDetailOpen) return;
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
  }, [currentPage, goToPage, isDetailOpen]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isDetailOpen) return;
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
  }, [currentPage, goToPage, isDetailOpen]);
};
