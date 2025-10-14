import { convertToCelsius } from "../helpers/convert";
import settings from "../settingsState";
export default function mainInformation(currentCity) {
  const cityName = document.querySelector(".current-city-title");
  const temperature = document.querySelector(".temperature");
  const weatherCondition = document.querySelector(".weather");
  const highTempText = document.querySelector(".lows.deg");
  const lowTempText = document.querySelector(".highs.deg");
  const currentTime = document.querySelector(".current-time");

  const capitalizeName = function (name) {
    let nameSplit = name.split(" ");

    for (let i = 0; i < nameSplit.length; i++) {
      nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].substring(1);
    }
    return nameSplit.join(" ");
  };

  const update = function () {
    console.log(settings);
    let temp = currentCity.temperature;
    let lowTemp = currentCity.highTemperature;
    let highTemp = currentCity.lowTemperature;

    const unit = settings.temperatureUnit;

    //If the user selected Celsius, turn temperature related units to C.
    if (unit === "C") {
      temp = convertToCelsius(temp);
      highTemp = convertToCelsius(highTemp);
      lowTemp = convertToCelsius(lowTemp);
    }
    cityName.textContent = capitalizeName(currentCity.name);
    temperature.textContent = temp;
    currentTime.textContent = currentCity.currentDate;
    weatherCondition.textContent = currentCity.weatherCondition;
    highTempText.textContent = highTemp;
    lowTempText.textContent = lowTemp;
  };

  return { update };
}
