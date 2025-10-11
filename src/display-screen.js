import mainInformation from "./components/main-information";
import humidity from "./components/humidity";
import airQuality from "./components/airquality";
import precipitation from "./components/precipitation";
import feelslike from "./components/feelslike";
import wind from "./components/wind";
export default function showDisplay(data, currentCity) {
  //Global variables for our weather components

  //Main information (City name, temperature, etc...)
  //Display Main Information
  const mim = mainInformation(currentCity);
  mim.update();

  //Display humidity
  const hm = humidity(currentCity);
  hm.update();

  //Display air quality
  const aqm = airQuality(currentCity);
  aqm.update();

  //Display precipitation
  const pm = precipitation(currentCity);
  pm.update();

  //Display feels like
  const fm = feelslike(currentCity);
  fm.update();

  //Display wind
  const wm = wind(currentCity);
  wm.update();
  console.log(window.screen);

  //compass line maker

  const far = 55;

  const windCircle = document.querySelector(".wind-circle");
  const pressureCircle = document.querySelector(".pressure-circle");

  compassLineMaker(far);
  pressureLineMaker(-55);

  async function compassLineMaker(far) {
    for (let i = 0; i < 360; i += 5) {
      const currLine = makeCompassLine();

      if (checkIfLineShouldBePlaced(i)) continue;
      await new Promise((resolve, reject) => setTimeout(resolve, 100));

      currLine.style.transform = `rotate(${i}deg) translateY(${far}px)`;
      windCircle.appendChild(currLine);
      if (i % 45 == 0) {
        currLine.classList.add("bold");
      }
    }
  }

  async function pressureLineMaker(far) {
    for (let i = -120; i <= 120; i += 8) {
      const currLine = makePressureLine();

      await new Promise((resolve, reject) => setTimeout(resolve, 100));

      currLine.style.transform = `rotate(${i}deg) translateY(${far}px)`;
      pressureCircle.appendChild(currLine);
    }
  }

  addPressureMarker(-120, -55);

  function addPressureMarker(deg, far) {
    const currLine = makePressureMarker();
    currLine.style.transform = `rotate(${deg}deg) translateY(${far}px)`;
    pressureCircle.appendChild(currLine);
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

  function makeCompassLine() {
    const compassLine = document.createElement("div");
    compassLine.classList.add("compass-line");

    return compassLine;
  }

  function makePressureLine() {
    const pressureLine = document.createElement("div");
    pressureLine.classList.add("pressure-line");

    return pressureLine;
  }

  function makePressureMarker() {
    const pressureMarker = document.createElement("div");
    pressureMarker.classList.add("pressure-marker");

    return pressureMarker;
  }
}
