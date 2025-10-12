import { initCity } from "../initCity";
import showDisplay from "../display-screen";
export function createHourElement(query, currentHour, now, setting) {
  const time = currentHour.time;
  const iconType = currentHour.iconType;
  const temp = currentHour.temp;

  const hourItem = document.createElement("div");
  const hourTitle = document.createElement("h4");
  const hourIcon = document.createElement("div");
  const hourTemp = document.createElement("h4");

  hourItem.classList.add("hour-item");
  hourTitle.classList.add("hour-title");
  hourIcon.classList.add("hour-icon");
  hourTemp.setAttribute("class", "hour-temp deg");

  hourTitle.textContent = time;
  hourIcon.textContent = iconType;
  hourTemp.textContent = temp;

  hourItem.appendChild(hourTitle);
  hourItem.appendChild(hourIcon);
  hourItem.appendChild(hourTemp);

  if (now) {
    return hourItem;
  }

  //Add event
  hourItem.addEventListener("click", (e) => {
    // console.log(currentHour);
    // console.log(query);
    // const currentCityHour = initCity(query, currentHour);
    // showDisplay(setting, currentCityHour, query);
    //works
    // console.log(w);
  });

  return hourItem;
}
