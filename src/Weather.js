import React from "react";
import axios from "axios";

export default function Weather(props) {
  function displayWeather(response) {
    let temperature = response.data.main.temp;
    return alert(`The weather in ${props.city} is ${temperature}`);
  }

  let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);

  return <h2> Hello from Weather!</h2>;
}
