import React from "react";

export default function ForcastDay(props) {
  if (props.daily == null) {
    return <div>loading</div>;
  } else {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.daily.dt * 1000);
    let imgsrc = `https://openweathermap.org/img/wn/${props.daily.weather[0].icon}@2x.png`;

    return (
      <div>
        <h4>{days[date.getDay()]}</h4>
        <img src={imgsrc} alt="weather img" />
        <h5>
          {Math.round(props.daily.temp.max)}°{" "}
          <span>{Math.round(props.daily.temp.min)}°</span>
        </h5>
      </div>
    );
  }
}
