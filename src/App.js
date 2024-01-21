import { useEffect, useRef, useState } from "react";

import GameOfLife from "./components/game-of-life";
import "./App.css";

function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [duration, setDuration] = useState(1000);
  const [type, setType] = useState("blinker");
  const ref = useRef(null);

  function handleStart() {
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setStateIndex((i) => i + 1);
    }, duration);

    setStateIndex(0);
  }

  function handleNext() {
    clearInterval(ref.current);
    setStateIndex(stateIndex + 1);
  }

  function handlePrev() {
    clearInterval(ref.current);
    setStateIndex(Math.max(0, stateIndex - 1))
  }

  return (
    <>
      <header>
        <h2>Game of Life</h2>
      </header>
      <main>
        <div className="search-container">
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setStateIndex(0);
            }}
          >
            <option value="blinker">Blinker</option>
            <option value="block">Block</option>
            <option value="beehive">Beehive</option>
            <option value="tube">Tube</option>
            <option value="toad">Toad</option>
            <option value="glider">Glider</option>
            <option value="penta-decathlon">Penta decathlon</option>
            <option value="penta-decathlon-full">Penta decathlon (full)</option>
            <option value="pulsar">Pulsar</option>
          </select>
          <button
            disabled={stateIndex === 0}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button onClick={handleNext}>Next</button>
          <button onClick={handleStart}>Start</button>
          <button onClick={() => clearInterval(ref.current)}>Stop</button>
          <label>
            <input
              type="range"
              min="100"
              max="3000"
              value={duration}
              onChange={(e)=> setDuration(Number(e.target.value))}
            />
            <br />
            duration: {duration} ms
          </label>
          <strong>{stateIndex}</strong>
        </div>
        <GameOfLife type={type} stateIndex={stateIndex} />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
