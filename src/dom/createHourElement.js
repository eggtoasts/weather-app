import { initCity } from "../initCity";
import showDisplay from "../display-screen";
import { convertTo12Hour } from "../helpers/time";
import { setIcon } from "../helpers/icon";
export function createHourElement(query, currentHour, now, setting) {
  console.log(currentHour);
  const time = currentHour.time;
  const iconType = currentHour.iconType;
  const temp = currentHour.temp;

  const hourItem = document.createElement("div");
  const hourTitle = document.createElement("h4");
  const hourIcon = setIcon(iconType);
  const hourTemp = document.createElement("h4");

  hourItem.classList.add("hour-item");
  hourTitle.classList.add("hour-title");
  hourTemp.setAttribute("class", "hour-temp deg");

  hourTitle.textContent = convertTo12Hour(time);
  hourTemp.textContent = temp;

  hourItem.appendChild(hourTitle);
  hourItem.appendChild(hourIcon);
  hourItem.appendChild(hourTemp);

  if (now) {
    return hourItem;
  }

  //Add event
  hourItem.addEventListener("click", (e) => {
    console.log(currentHour);
    const currentCityHour = initCity(query, currentHour, 0);
    showDisplay(setting, currentCityHour, query);
    //works
  });

  return hourItem;
}
