import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    setMessage(`It is currently 21.5° in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <form id="search-form" onSubmit={handleSearch}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control city-input"
            onChange={updateCity}
          />
        </div>
        <div className="col-3 p-0">
          <input
            type="submit"
            className="btn btn-primary w-100 searchbutton"
            value="Search"
          />
        </div>
      </div>
      <h3>{message}</h3>
    </form>
  );
}
