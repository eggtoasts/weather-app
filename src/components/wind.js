import { convertToKm } from "../helpers/convert";
export default function wind(currentCity) {
  const windGust = document.querySelector(".wind-gusts-number");
  const windSpeed = document.querySelector(".wind-number");
  const windDir = document.querySelector(".wind-dir-number");
  const arrow = document.querySelector(".arrow");
  const windCircleNumber = document.querySelector(".wind-circle-number");
  const windUnitText = document.querySelector(".wind-unit");

  function moveArrow(dir) {
    //add animation maybe? :]
    arrow.style.transform = `rotate(${dir}deg)`;
  }
  const update = function () {
    let gust = currentCity.windGust;
    let speed = currentCity.windSpeed;
    let dir = currentCity.windDirection;

    windGust.textContent = gust;
    windSpeed.textContent = speed;
    windDir.textContent = dir;
    windCircleNumber.textContent = speed;
    moveArrow(dir);
  };

  return { update };
}
