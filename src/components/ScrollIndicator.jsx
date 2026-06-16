import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-indicator ${visible ? 'visible' : ''}`}>
      <span>Scroll</span>
      <div className="line"></div>
    </div>
  );
};

export default ScrollIndicator;
