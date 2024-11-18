import React from "react";
import "./styles.css";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <Weather />
    </div>
  );
}
