import { setWeatherIcon } from "../helpers/icon";

export function createDayElement(currentDay, min, max) {
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

  const start = minTemp - min;
  const end = max - maxTemp;

  //We convert the width to match the 100px width unit
  const width = (maxTemp - minTemp) * (100 / (max - min));

  //YES!!! I GOT IT
  coloredLine.style.transform = `translateX(${
    -50 + width / 2 + start * (100 / (max - min))
  }px)`;
  coloredLine.style[`width`] = `${width}px`;

  dayItem.appendChild(dailyTitle);
  dayItem.appendChild(dailyIcon);

  const minMaxContainer = dayItem.appendChild(dailyMinMax);
  minMaxContainer.appendChild(dailyMin);
  const lineContainer = minMaxContainer.appendChild(line);
  lineContainer.appendChild(coloredLine);
  minMaxContainer.appendChild(dailyMax);

  return dayItem;
}
