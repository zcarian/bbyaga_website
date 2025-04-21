"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "./Hero";

const AutoHideHero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isHoveredRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Auto-hide timer
  useEffect(() => {
    // Only apply auto-hide on desktop
    if (isMobile) return;

    const timer = setTimeout(() => {
      if (!isHoveredRef.current) {
        setIsVisible(false);
      }
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Show on hover
  const handleMouseEnter = () => {
    if (!isMobile) {
      isHoveredRef.current = true;
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      isHoveredRef.current = false;
      // Add a small delay before hiding again
      setTimeout(() => {
        if (!isHoveredRef.current) {
          setIsVisible(false);
        }
      }, 500);
    }
  };

  // For mobile, always show the hero
  if (isMobile) {
    return <Hero />;
  }

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Hero />
    </div>
  );
};

export default AutoHideHero;
