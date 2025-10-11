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
    let temp = currentCity.getTemperature();
    const unit = setting.getTemperatureUnit();

    if (unit === "C") {
      temp = convertToCelsius(temp);
    }
    cityName.textContent = capitalizeName(currentCity.getName());
    temperature.textContent = temp;
    weatherCondition.textContent = currentCity.getWeatherCondition();
    highTemp.textContent = currentCity.getHighTemperature();
    lowTemp.textContent = currentCity.getLowTemperature();
  };

  return { update };
}
