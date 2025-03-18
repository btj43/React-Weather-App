import React from "react";
import "./styles.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer className="git">
          <a
            href="https://github.com/btj43/Vanilla-Weather-App"
            id="link"
            target="_blank"
          >
            Open Source Code
          </a>{" "}
          by Beth Jones
        </footer>
      </div>
    </div>
  );
}
