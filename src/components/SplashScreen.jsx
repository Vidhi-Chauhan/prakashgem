// SplashScreen.jsx
import React, { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [showGems, setShowGems] = useState(false);
  const [showPrakash, setShowPrakash] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowPrakash(true); // Show "prakash" after 0.5 seconds
    }, 500);

    const timer2 = setTimeout(() => {
      setShowGems(true); // Show "gems" after 1.5 seconds
    }, 1500);

    const timer3 = setTimeout(() => {
      onFinish(); // Call onFinish after both words are displayed
    }, 3000); // Total duration for "prakash gems"

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <h1 className="colorful-title">
        <span className={`prakash ${showPrakash ? "visible" : ""}`}>
          prakash
        </span>
        <span className={`gems ${showGems ? "visible" : ""}`}> gems</span>
      </h1>
    </div>
  );
};

export default SplashScreen;
