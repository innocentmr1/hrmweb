import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const mainText = "TechPal";
  const subText = "Your All In One HR.....";
  const [visible, setVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setVisible(true);

    // Start typing animation after main text appears
    const timer = setTimeout(() => {
      setSubVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (subVisible && currentIndex < subText.length) {
      const timer = setTimeout(() => {
        setTypedText(subText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [subVisible, currentIndex, subText]);

  return (
    <div className="loader-screen loader-screen--textonly">
      <div className="loader-particles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="loader-particle"
            style={{ "--delay": `${i * 0.5}s` }}
          ></div>
        ))}
      </div>
      <span className={`loader-animated-text${visible ? " visible" : ""}`}>
        {mainText}
      </span>
      <span className={`loader-sub-text${subVisible ? " visible" : ""}`}>
        {typedText}
        <span className="loader-cursor">|</span>
      </span>
    </div>
  );
}
