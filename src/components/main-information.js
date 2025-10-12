import { convertToCelsius } from "../helpers/convert";
export default function mainInformation(currentCity, setting) {
  const cityName = document.querySelector(".current-city-title");
  const temperature = document.querySelector(".temperature");
  const weatherCondition = document.querySelector(".weather");
  const highTemp = document.querySelector(".lows.deg");
  const lowTemp = document.querySelector(".highs.deg");

  const capitalizeName = function (name) {
    let nameSplit = name.split(" ");

    for (let i = 0; i < nameSplit.length; i++) {
      nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].substring(1);
    }

    console.log(nameSplit);

    return nameSplit.join(" ");
  };

  const update = function () {
    let temp = currentCity.temperature;
    const unit = setting.getTemperatureUnit();

    if (unit === "C") {
      temp = convertToCelsius(temp);
    }
    cityName.textContent = capitalizeName(currentCity.name);
    temperature.textContent = temp;
    weatherCondition.textContent = currentCity.weatherCondition;
    highTemp.textContent = currentCity.highTemperature;
    lowTemp.textContent = currentCity.lowTemperature;
  };

  return { update };
}
