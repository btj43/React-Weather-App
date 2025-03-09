import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import SearchEngine from "./SearchEngine";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    const now = new Date();
    const formattedDate = `${now.getDate().toString().padStart(2, "0")}.${(
      now.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${now.getFullYear()}`;
    //setTemperature(response.data.temperature.current);
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      date: formattedDate,
      description: response.data.condition.description,
      tempCelcius: response.data.temperature.current,
      tempFaren: 80,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      imgUrl: response.data.condition.icon_url,
    });
    setReady(true);
  }

  if (ready) {
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
  } else {
    console.log("loading...");
    const apiKey = "c49tafo312b920a246236ebd70ea80ab";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
