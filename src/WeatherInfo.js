import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div id="city">{props.data.city} </div>
      <div id="country">{props.data.country}</div>
      <div id="date">{props.data.date}</div>
      <br />
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3">
          <img src={props.data.imgUrl} alt="weather image" id="iconImg" />
          <div id="description">{props.data.description}</div>
        </div>
        <div className="col-3">
          <WeatherTemperature celcius={props.data.temperature} />
          <ul className="weather-info">
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span>
            </li>
          </ul>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
