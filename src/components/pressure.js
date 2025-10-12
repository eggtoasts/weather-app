import { convertToInHg } from "../helpers/convert";

export default function pressure(currentCity, setting) {
  const pressureMarker = document.querySelector(".pressure-marker");
  const pressureMeasurement = document.querySelector(".preasure-measurement");
  const pressureNumber = document.querySelector(".pressure-number");

  //-120deg is low, 120deg is high

  //We have 240 ticks in total,
  //We can turn it into 9 by 240/26.6666667

  //Highest record pressure in inHg is 32
  //Lowest record pressure in inHg is 25.1

  const low = 0;
  const high = 32;

  console.log(pressureMarker);
  const movePressureMarker = function (deg) {
    pressureMarker.style.transform = `rotate(${
      -120 + (deg % 25.1) * 26.6666667
    }deg) translateY(-55px)`;
  };
  const update = function () {
    let deg = currentCity.pressure;
    pressureNumber.textContent = deg;
    movePressureMarker(convertToInHg(deg));
  };

  return { update };
}
