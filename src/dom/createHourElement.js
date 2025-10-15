import { initCity } from "../initCity";
import showDisplay from "../display-screen";
import { convertTo12Hour } from "../helpers/time";
import { convertToCelsius } from "../helpers/convert";
import { setWeatherIcon } from "../helpers/icon";
import settings from "../settingsState";
export function createHourElement(query, currentHour, now) {
  const time = currentHour.time;
  const iconType = currentHour.iconType;
  const temp = currentHour.temp;

  const hourItem = document.createElement("div");
  const hourTitle = document.createElement("h4");
  const hourIcon = setWeatherIcon(iconType);
  const hourTemp = document.createElement("h4");

  hourItem.classList.add("hour-item");
  hourTitle.classList.add("hour-title");
  hourTemp.setAttribute("class", "hour-temp deg");

  hourTitle.textContent = convertTo12Hour(time);
  hourTemp.textContent =
    settings.temperatureUnit === "C" ? convertToCelsius(temp) : temp;

  hourItem.appendChild(hourTitle);
  hourItem.appendChild(hourIcon);
  hourItem.appendChild(hourTemp);

  if (now) {
    return hourItem;
  }

  //Add event
  hourItem.addEventListener("click", (e) => {
    const currentCityHour = initCity(query, currentHour, 0);
    showDisplay(currentCityHour, query);
    //works
  });

  return hourItem;
}
