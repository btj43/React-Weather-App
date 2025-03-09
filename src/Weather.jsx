import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import SearchEngine from "./SearchEngine";
import WeatherInfo from "./WeatherInfo";

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
        <WeatherInfo data={weatherData} />
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
