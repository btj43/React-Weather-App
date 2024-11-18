import React from "react";
import "./Weather.css";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  let weatherData = {
    city: "New York",
    country: "USA",
    date: "20.01.2024",
    description: "Rainy",
    tempCelcius: 24,
    tempFaren: 80,
    humidity: 20,
    wind: 5,
    imgUrl: "https://openweathermap.org/img/wn/10d@2x.png",
  };
  return (
    <div className="weather-app">
      <h1 className="title">World Weather App</h1>
      <SearchEngine />
      <form id="location-form">
        <input
          type="submit"
          className="btn btn-primary w-100"
          value="📌 Location "
          id="location"
        />
      </form>
      <div id="city">
        {weatherData.city}, {weatherData.country}
      </div>

      <div className="row">
        <div className="col-4">
          <div id="date">{weatherData.date}</div>
          <div id="description">{weatherData.description}</div>
        </div>

        <div className="col-2" id="icon">
          <img src={weatherData.imgUrl} alt="clear" id="iconImg" />
        </div>

        <div className="col-3">
          <span id="temp">{weatherData.tempCelcius}</span>
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
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}</span>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="weather-forecast" id="weather-forecast"></div>
      <div className="git">
        <a
          href="https://github.com/btj43/Vanilla-Weather-App"
          id="link"
          target="_blank"
        >
          Open Source Code
        </a>
        by Beth Jones
      </div>
    </div>
  );
}
