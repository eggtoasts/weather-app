import { convertToKm } from "../helpers/convert";
export default function wind(currentCity, setting) {
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
    let unit = setting.getWindUnit() == "KM" ? "km/h" : "mph";
    let gust = currentCity.getWindGust();
    let speed = currentCity.getWindSpeed();
    let dir = currentCity.getWindDirection();
    console.log("wind type is " + setting.getWindUnit());

    if (unit == "km/h") {
      gust = convertToKm(gust);
      speed = convertToKm(speed);
      windUnitText.textContent = "km/h";
    }
    windGust.textContent = gust + " " + unit;
    windSpeed.textContent = speed + " " + unit;
    windDir.textContent = dir;
    windCircleNumber.textContent = speed;
    moveArrow(dir);
  };

  return { update };
}
