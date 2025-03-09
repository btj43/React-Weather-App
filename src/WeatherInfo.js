import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div id="city">
        {props.data.city}, {props.data.country}
      </div>

      <div className="row">
        <div className="col-4">
          <div id="date">{props.data.date}</div>
          <div id="description">{props.data.description}</div>
        </div>

        <div className="col-2" id="icon">
          <img src={props.data.imgUrl} alt="clear" id="iconImg" />
        </div>

        <div className="col-3">
          <span id="temp">{props.data.tempCelcius}</span>
          <span className="units">
            <a id="celcius" href="#" className="units">
              °C
            </a>
            |
            <a id="faren" href="#" className="units">
              °F
            </a>
          </span>
        </div>

        <div className="col-3">
          <ul className="weather-info">
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="weather-forecast" id="weather-forecast"></div>
    </div>
  );
}
