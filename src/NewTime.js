import React from "react";

export default function NewTime(props) {
  let date = new Date(props.time * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <span>
      {days[day]} {hour}:{minute}
    </span>
  );
}
