import React, { useEffect, useState } from "react";
import "./WaveTextAnimation.css";

function WaveTextAnimation({ mytext }) {
  const [displayText, setDisplayText] = useState([]);

  useEffect(() => {
    function updateText(text) {
      const delay = 60;

      const characters = text.split("");

      setDisplayText([]);

      characters.forEach((letter, index) => {
        setTimeout(() => {
          setDisplayText((prevText) => [...prevText, letter]);
        }, index * delay);
      });
    }

    updateText(mytext);
  }, [mytext]);

  return (
    <div className="text-container">
      <h6 className="font-semibold text-2xl">
        {displayText.map((letter, index) => (
          <span key={index} className="wavy">
            {letter}
          </span>
        ))}
      </h6>
    </div>
  );
}

export default WaveTextAnimation;
