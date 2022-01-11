import React, { useState } from "react";
import axios from "axios";

export default function Forcast(props) {
  const [forcast, setForcast] = useState("");

  function showForcast(response) {
    setForcast(response.data.daily);
  }

  const [loaded, setLoad] = useState(true);
  if (loaded === true && props.forcastUrl != null) {
    axios.get(props.forcastUrl).then(showForcast);
    setLoad(false);
  } else if (loaded === true && props.forcastUrl == null) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  } else {
    console.log(forcast);
    // console.log(forcast[1].temp.max);
    return <div>loaded</div>;
  }
}
