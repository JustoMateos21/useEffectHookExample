import React, { useEffect, useState } from "react";
import "./Timer.css";
const Timer = () => {
  const [count, setCount] = useState(0);
  const [stopCount, setStopCount] = useState(false);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setStopCount(!stopCount);
        }}
      >
        {!stopCount ? "Stop" : "reload"}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset to 0
      </button>
    </div>
  );
};

export default Timer;
