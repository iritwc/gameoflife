import { useData } from "../utils/use-data";

import "./gameoflife.css";

const baseUrl = "http://localhost:5000/api/gameoflife";
const toKey = (i, j) => `${i},${j}`;

export default function GameOfLife({ type, stateIndex }) {
  const N = 19;
  const BoardDimensions = new Array(N).fill(0).map((value, i) => i);
  const data = useData(`${baseUrl}/${type}?n=${N}`);
  let currentSet = new Set();

  if (data !== null) {
    const n = data.length;
    currentSet = new Set(data[stateIndex % n].map((pos) => toKey(...pos)));
  }
  return (
    <div className="data-container">
      {BoardDimensions.map((i) => (
        <div key={type + i} className="data-row">
          {BoardDimensions.map((j) => (
            <div
              key={type + i + j}
              className={
                "data-col" + (currentSet.has(toKey(i, j)) ? " bg" : "")
              }
            >
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
