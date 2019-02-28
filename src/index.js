import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import a from "./assets/a.svg";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div
        style={{
          position: "relative",
          height: "200px",
          width: "200px",
          margin: "0 auto"
        }}
      >
        {input.split("").map((x, index) => {
          return (
            <span
              key={index}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "200px"
              }}
            >
              {<img style={{ height: "100px", margin: "0 auto" }} src={a} />}
            </span>
          );
        })}
      </div>
      <br />
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
