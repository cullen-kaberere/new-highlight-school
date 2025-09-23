"use client";

import { useEffect, useState } from "react";

export default function RotatingText({ texts, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="rotating-text-wrapper">
      <div className="rotating-text-container">
        {texts.map((text, index) => (
          <span
            key={index}
            className={`rotating-text ${index === currentIndex ? "active" : ""}`}
            aria-hidden={index !== currentIndex}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}