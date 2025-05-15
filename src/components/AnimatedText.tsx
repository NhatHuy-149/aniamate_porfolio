import React, { useEffect, useState } from "react";

function AnimatedText({ texts }: { texts: string[] }) {
  const [cursorIndex, setCursorIndex] = useState(0);
  const [iteration, setIteration] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const text = texts[currentTextIndex] || "";

  useEffect(() => {
    if (cursorIndex < text.length) {
      const timer = setTimeout(() => {
        setCursorIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Khi hết 1 chữ, dừng 1.5s rồi chuyển sang chữ tiếp theo
      const resetTimer = setTimeout(() => {
        setCursorIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIteration((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(resetTimer);
    }
  }, [cursorIndex, text.length, texts.length]);

  return (
    <span className="inline-block" key={iteration} style={{ position: "relative" }}>
      <span style={{ display: "inline" }}>
        {text.slice(0, cursorIndex)}
      </span>
      <span
        className="inline-block"
        style={{
          width: "1ch",
          display: "inline-block",
          animation: "blinkCursor 0.5s steps(2, start) infinite",
          background: "linear-gradient(130deg, #fc466b 0%, #00dbde 100%)",
          height: "4px",
          verticalAlign: "bottom",
          marginLeft: "4px",
        }}
      >
        &nbsp;
      </span>
      <span style={{ opacity: 0 }}>
        {text.slice(cursorIndex)}
      </span>
      <style jsx>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          40% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}

export default AnimatedText;
