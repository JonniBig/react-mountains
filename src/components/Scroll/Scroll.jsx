import React, { useState, useEffect } from 'react';
import { StyledScroll } from './Scroll.styled';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledScroll onClick={scrollToTop}>
      <div className={`scroll ${isVisible ? 'visible' : ''}`}>
        <div className={`smallCircle ${isVisible ? 'visible' : ''}`}>
          &#8613;
        </div>{' '}
      </div>
    </StyledScroll>
  );
};

export default ScrollToTopButton;
