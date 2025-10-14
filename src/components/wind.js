import { convertToKm } from "../helpers/convert";
import settings from "../settingsState";
export default function wind(currentCity) {
  const windGust = document.querySelector(".wind-gusts-number");
  const windSpeed = document.querySelector(".wind-number");
  const windDir = document.querySelector(".wind-dir-number");
  const arrow = document.querySelector(".arrow");
  const windCircleNumber = document.querySelector(".wind-circle-number");
  const windUnitText = document.querySelector(".wind-unit");

  function moveArrow(dir) {
    arrow.style.transform = `rotate(${dir}deg)`;
  }
  const update = function () {
    let gust = currentCity.windGust;
    let speed = currentCity.windSpeed;
    let dir = currentCity.windDirection;
    const unit = settings.windUnit;

    if (unit === "kmh") {
      gust = convertToKm(gust);
      speed = convertToKm(speed);
    }
    windGust.textContent = gust + " " + unit;
    windSpeed.textContent = speed + " " + unit;
    windDir.textContent = dir;
    windCircleNumber.textContent = speed;
    windUnitText.textContent = unit;
    moveArrow(dir);
  };

  return { update };
}
