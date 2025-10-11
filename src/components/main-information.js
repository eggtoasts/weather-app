export default function mainInformation(currentCity) {
  const cityName = document.querySelector(".current-city-title");
  const temperature = document.querySelector(".temperature");
  const weatherCondition = document.querySelector(".weather");
  const highTemp = document.querySelector(".lows");
  const lowTemp = document.querySelector(".highs");

  const capitalizeName = function (name) {
    let nameSplit = name.split(" ");

    for (let i = 0; i < nameSplit.length; i++) {
      nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].substring(1);
    }

    console.log(nameSplit);

    return nameSplit.join(" ");
  };

  const update = function () {
    cityName.textContent = capitalizeName(currentCity.getName());
    temperature.textContent = currentCity.getTemperature();
    weatherCondition.textContent = currentCity.getWeatherCondition();
    highTemp.textContent = currentCity.getHighTemperature();
    lowTemp.textContent = currentCity.getLowTemperature();
  };

  return { update };
}
