import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface GlitchHeadingProps {
  children: React.ReactNode;
  className?: string;
  dataText?: string;
}

export const GlitchHeading: React.FC<GlitchHeadingProps> = ({ children, className = "", dataText }) => {
  const [isActive, setIsActive] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          // Only trigger once
          observer.unobserve(entry.target);
          // Reset after animation duration
          setTimeout(() => setIsActive(false), 400);
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={headingRef}
      data-text={dataText || children?.toString()}
      className={`glitch-on-scroll ${isActive ? 'active' : ''} ${className}`}
    >
      {children}
    </h2>
  );
};
