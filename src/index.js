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

// getWeather();

console.log(window.screen);

//compass line maker

const far = 55;

const windCircle = document.querySelector(".wind-circle");

compassLineMaker(far);

async function compassLineMaker(far) {
  for (let i = 0; i < 360; i += 5) {
    const currLine = makeLine();

    if (checkIfLineShouldBePlaced(i)) continue;
    await new Promise((resolve, reject) => setTimeout(resolve, 100));

    currLine.style.transform = `rotate(${i}deg) translateY(${far}px)`;
    windCircle.appendChild(currLine);
    if (i % 45 == 0) {
      currLine.classList.add("bold");
    }
  }
}

function checkIfLineShouldBePlaced(i) {
  return (
    (i < 100 && i > 80) ||
    (i < 190 && i > 170) ||
    (i < 280 && i > 260) ||
    (i < 370 && i > 350) ||
    i < 10
  );
}

function makeLine() {
  const compassLine = document.createElement("div");
  compassLine.classList.add("compass-line");

  return compassLine;
}
