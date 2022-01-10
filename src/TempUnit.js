import React, { useState } from "react";

export default function TempUnit(props) {
  let [degree, setDegree] = useState(true);
  function setCel(event) {
    event.preventDefault();

    setDegree(true);
  }
  function setFah(event) {
    event.preventDefault();

    setDegree(false);
  }

  if (degree) {
    return (
      <span>
        {props.temp}

        <small>
          <input
            onClick={setCel}
            className="button chosen"
            type="button"
            value="°C"
          />
          <span> |</span>
          <input
            onClick={setFah}
            className="button"
            type="button"
            value="(°F)"
          />
        </small>
      </span>
    );
  } else {
    return (
      <span>
        {Math.round(props.temp * 1 + 32)}
        <small>
          {" "}
          <input
            onClick={setFah}
            className="button chosen"
            type="button"
            value="°F"
          />
          <span> |</span>
          <input
            onClick={setCel}
            className="button"
            type="button"
            value="(°C)"
          />
        </small>
      </span>
    );
  }
}
