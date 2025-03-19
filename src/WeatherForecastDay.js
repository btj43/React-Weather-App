import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[day];
  }
  return (
    <div className="weatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-description">
        {props.data.condition.description}
      </div>
      <div className="col-2" id="forecastIcon">
        <img
          src={props.data.condition.icon_url}
          alt="clear"
          className="forecast-icon"
        />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="Weatherforecast-temp-high">
          {Math.round(props.data.temperature.maximum)}°{" "}
        </span>
        <span className="Weatherforecast-temp-low">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
