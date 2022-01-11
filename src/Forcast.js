import React, { useState } from "react";
import axios from "axios";
import ForcastDay from "./ForcastDay";

export default function Forcast(props) {
  const [forcast, setForcast] = useState(null);
  const [url, setUrl] = useState(null);
  function showForcast(response) {
    setForcast(response.data.daily);
  }

  const [loaded, setLoad] = useState(true);
  if (loaded === true && props.forcastUrl != null) {
    setUrl(props.forcastUrl);
    axios.get(props.forcastUrl).then(showForcast);
    setLoad(false);
  } else if (loaded === true && props.forcastUrl == null) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  } else if (url !== props.forcastUrl) {
    setLoad(true);
  } else if (forcast != null) {
    return (
      <footer>
        <ForcastDay daily={forcast[1]} />
        <ForcastDay daily={forcast[2]} />
        <ForcastDay daily={forcast[3]} />
        <ForcastDay daily={forcast[4]} />
        <ForcastDay daily={forcast[5]} />
      </footer>
    );
  } else {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }
}
