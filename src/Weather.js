import React, { useState } from "react";
import axios from "axios";
import NewTime from "./NewTime";
import TempUnit from "./TempUnit";
import Forcast from "./Forcast";

export default function Weather(props) {
  const apiKey = "eb0a1d7541da4e9c4f957db698ea2ffe";
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ load: true });
  const [loading, setLoading] = useState("Current");
  const [loading2, setLoading2] = useState("Search");

  function currentCity(event) {
    event.preventDefault();
    setLoading("Loading");
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    let tempertature = Math.round(response.data.main.temp);
    setWeather({
      name: response.data.name,
      temp: tempertature,
      description: response.data.weather[0].description,
      imgsrc: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: response.data.dt,
      lat: Math.round(response.data.coord.lat),
      lon: Math.round(response.data.coord.lon),
      forcastUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=e01fa26e562b7289409ac82529bc824e`,

      load: false,
    });

    setLoading("Current");
    setLoading2("Search");
  }

  function changCity(event) {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function loadCity() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function inputCity(event) {
    setCity(event.target.value);
  }

  function searchCity(event) {
    event.preventDefault();
    setLoading2("loading");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  if (weather.load) {
    loadCity();

    setWeather({ load: false });
  } else {
    return (
      <div id="upperContainer">
        <header>
          <input
            className="button"
            onClick={changCity}
            value="Charlottetown"
            type="button"
          />
          <input
            className="button"
            onClick={changCity}
            value="Toronto"
            type="button"
          />{" "}
          <input
            className="button"
            onClick={changCity}
            value="Vancouver"
            type="button"
          />{" "}
          <input
            className="button"
            onClick={changCity}
            value="Beijing"
            type="button"
          />
        </header>
        <form onSubmit={searchCity}>
          <input
            onChange={inputCity}
            type="search"
            placeholder="Enter a city"
          ></input>
          <input id="search" type="submit" value={loading2}></input>
          <input
            onClick={currentCity}
            id="current"
            type="button"
            value={loading}
          ></input>
        </form>
        <main>
          <h2>{weather.name}</h2>
          <h3>
            <NewTime time={weather.date} /> <br /> {weather.description}
          </h3>
        </main>
        <section>
          <img src={weather.imgsrc} alt={weather.description} />
          <h1>
            <TempUnit temp={weather.temp} />
          </h1>
          <h3>
            Humidity:{weather.humidity}%
            <br />
            Wind:{weather.wind}km/h
          </h3>
        </section>

        <Forcast forcastUrl={weather.forcastUrl} />
      </div>
    );
  }
}
