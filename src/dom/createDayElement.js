import { setWeatherIcon } from "../helpers/icon";

export function createDayElement(currentDay) {
  console.log(currentDay);
  const date = currentDay.date;
  const icon = currentDay.iconType;
  const minTemp = currentDay.minTemp;
  const maxTemp = currentDay.maxTemp;

  const dayItem = document.createElement("div");
  const dailyTitle = document.createElement("div");
  const dailyIcon = setWeatherIcon(icon, "day");
  const dailyMinMax = document.createElement("div");
  const dailyMin = document.createElement("div");
  const dailyMax = document.createElement("div");

  const line = document.createElement("div");
  const coloredLine = document.createElement("div");

  //Apply classes
  dayItem.classList.add("daily-item");
  dailyTitle.classList.add("daily-day");
  dailyMinMax.classList.add("daily-min-max");
  coloredLine.setAttribute("class", "daily-colored line");
  line.setAttribute("class", "daily line");
  dailyMin.setAttribute("class", "daily-min-temp deg");
  dailyMax.setAttribute("class", "daily-max-temp deg");

  dailyTitle.textContent = date;
  dailyMin.textContent = minTemp;
  dailyMax.textContent = maxTemp;

  dayItem.appendChild(dailyTitle);
  dayItem.appendChild(dailyIcon);

  const minMaxContainer = dayItem.appendChild(dailyMinMax);
  minMaxContainer.appendChild(dailyMin);
  const lineContainer = minMaxContainer.appendChild(line);
  lineContainer.appendChild(coloredLine);
  minMaxContainer.appendChild(dailyMax);

  return dayItem;
}
