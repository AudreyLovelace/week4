import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let apiKey = "eb0a1d7541da4e9c4f957db698ea2ffe";
  const [city, setCity] = useState("Charlottetown");
  const [weather, setWeather] = useState("");
  function showWeather(response) {
    let tempertature = Math.round(response.data.main.temp);

    setWeather({
      name: response.data.name,
      temp: tempertature,
      description: response.data.weather[0].description,
      imgsrc: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function changCity(event) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function inputCity(event) {
    setCity(event.target.value);
  }

  function loadWeahter(event) {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
    console.log("load");
  }

  function searchCity(event) {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }
  return (
    <div id="container">
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
            type="text"
            placeholder="Enter a city"
          ></input>
          <input id="search" type="submit" value="Search"></input>
          <input id="current" type="button" value="Current"></input>
        </form>
        <main>
          <h2>{weather.name}</h2>
          <h3>
            Thursday 15:38 <br /> {weather.description}
          </h3>
        </main>
        <section>
          <img src={weather.imgsrc} alt="clouds img" />
          <h1>
            {weather.temp}
            <small>°C</small>
          </h1>
          <h3>
            Humidity:{weather.humidity}%
            <br />
            Wind:{weather.wind}km/h
          </h3>
        </section>
        <footer>
          <div>
            <h4>Fri</h4>
            <img src="" alt="weather img" />
            <h5>
              13° <span>10°</span>
            </h5>
          </div>
          <div>
            <h4>Fri</h4>
            <img src="" alt="weather img" />
            <h5>
              13° <span>10°</span>
            </h5>
          </div>
          <div>
            <h4>Fri</h4>
            <img src="" alt="weather img" />
            <h5>
              13° <span>10°</span>
            </h5>
          </div>
          <div>
            <h4>Fri</h4>
            <img src="" alt="weather img" />
            <h5>
              13° <span>10°</span>
            </h5>
          </div>
          <div>
            <h4>Fri</h4>
            <img src="" alt="weather img" />
            <h5>
              13° <span>10°</span>
            </h5>
          </div>
        </footer>
      </div>
      <p>
        <a href="/">Open-source code</a>, by <a href="/">Audrey Lovelace</a>{" "}
        from
        <a href="/"> SheCodes</a>
      </p>
    </div>
  );
}
