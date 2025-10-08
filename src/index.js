import "./styles.css";
import { API_KEY } from "./env";

//fetches api

let query = "orlando";

let apiLink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${API_KEY}`;

async function getWeather() {
  const getCity = await fetch(apiLink);
  const data = await getCity.json();
  console.log(data);
}

getWeather();

//also add loading feature
