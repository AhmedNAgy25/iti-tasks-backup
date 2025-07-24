import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decreasse = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const btn = { border: "1px solid white", borderRadius: "5px" };
  return (
    <>
      <div
        className="card"
        style={{ border: "1px solid white", borderRadius: "10px" }}
      >
        <h1
          style={{
            border: "1px white solid",
            padding: "15px 0",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          {count}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "space-around",
          }}
        >
          <button style={btn} onClick={increase}>
            +
          </button>
          <button style={btn} onClick={reset}>
            reset
          </button>
          <button style={btn} onClick={decreasse}>
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
