import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function convertToFar(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="temperature">
        <span id="temp">{Math.round(props.celcius)}</span>
        <span className="units">
          °C{" "}
          <a id="faren" href="/" onClick={convertToFar} className="hidden-unit">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="temperature">
        <span id="temp">{Math.round(farenheit)}</span>
        <span className="units">
          <a
            id="celcius"
            href="/"
            onClick={convertToCelcius}
            className="hidden-unit"
          >
            °C{" "}
          </a>
          °F
        </span>
      </div>
    );
  }
}
