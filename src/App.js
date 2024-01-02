import { useRef, useState } from "react";

import GameOfLife from "./components/game-of-life";
import "./App.css";

function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [type, setType] = useState("blinker");
  const ref = useRef(null);

  function handleStart() {
    setStateIndex(0);
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setStateIndex((i) => i + 1);
    }, 500);
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
          <button disabled={stateIndex===0} onClick={() => setStateIndex(Math.max(0, stateIndex - 1))}>Prev</button>
          <button onClick={() => setStateIndex(stateIndex + 1)}>Next</button>
          <button onClick={() => handleStart()}>Start</button>
          <button onClick={() => clearInterval(ref.current)}>Stop</button>
          <strong>{stateIndex}</strong>
        </div>
        <GameOfLife type={type} stateIndex={stateIndex} />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
