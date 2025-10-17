import { convertToCelsius } from "../helpers/convert";
import settings from "../settingsState";

export default function airQuality(currentCity) {
  const averageTodayNumberText = document.querySelector(
    ".average-today-number"
  );
  const smallAverageNumberText = document.querySelector(".average-week-number");
  const averagesDiffNumberText = document.querySelector(".averages-number");
  const update = function () {
    let averageWeekMaxTemp = currentCity.averageHigh;
    let todayMaxTemp = currentCity.highTemperature;

    if (settings.temperatureUnit === "C") {
      averageWeekMaxTemp = convertToCelsius(averageWeekMaxTemp);
      todayMaxTemp = convertToCelsius(todayMaxTemp);
    }
    const diff = todayMaxTemp - averageWeekMaxTemp;

    //Update the texts
    averagesDiffNumberText.textContent = diff >= 0 ? `+${diff}` : diff;
    averageTodayNumberText.textContent = "H: " + todayMaxTemp;
    smallAverageNumberText.textContent = "H: " + averageWeekMaxTemp;
  };

  return { update };
}
