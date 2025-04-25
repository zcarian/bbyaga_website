"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "./Hero";

const AutoHideHero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isHoveredRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Auto-hide after 5s (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const timer = setTimeout(() => {
      if (!isHoveredRef.current) {
        setIsVisible(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Desktop hover events
  const handleMouseEnter = () => {
    if (!isMobile) {
      isHoveredRef.current = true;
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      isHoveredRef.current = false;
      setTimeout(() => {
        if (!isHoveredRef.current) {
          setIsVisible(false);
        }
      }, 500);
    }
  };

  // Mobile tap toggles visibility
  const handleTap = () => {
    if (isMobile) {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
    >
      <Hero isVisible={isVisible} />
    </div>
  );
};

export default AutoHideHero;
