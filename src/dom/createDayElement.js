import { setWeatherIcon } from "../helpers/icon";

function changeGradient(minTemp, maxTemp, coloredLine) {
  let startGradient = "";
  let endGradient = "";

  if (maxTemp >= 90) {
    //red
    endGradient = "#ff3d3d";
  } else if (maxTemp >= 80) {
    //saturated orange
    endGradient = "#FF5B03";
  } else if (maxTemp >= 75) {
    //orange
    endGradient = "#ff9b38ff";
  } else if (maxTemp >= 70) {
    //lighter orange
    endGradient = "#FFCC26";
  } else if (maxTemp >= 65) {
    //yellow
    endGradient = "#fff426ff";
  } else if (minmaxTempTemp >= 60) {
    //green
    endGradient = "#D2E864";
  } else if (maxTemp >= 50) {
    //green blue
    endGradient = "#91E3B3";
  } else if (maxTemp >= 40) {
    //light blue
    endGradient = "#96f5ebff";
  } else {
    //bright blue
    endGradient = "#07E5ED";
  }

  if (minTemp >= 90) {
    //red
    startGradient = "#ff3d3d";
  } else if (minTemp >= 80) {
    //saturated orange
    startGradient = "#FF5B03";
  } else if (minTemp >= 75) {
    //orange
    startGradient = "#ff9b38ff";
  } else if (minTemp >= 70) {
    //lighter orange
    startGradient = "#FFCC26";
  } else if (minTemp >= 65) {
    //yellow
    startGradient = "#fff426ff";
  } else if (minTemp >= 60) {
    //green
    startGradient = "#D2E864";
  } else if (minTemp >= 50) {
    //green blue
    startGradient = "#91E3B3";
  } else if (minTemp >= 40) {
    //light blue
    startGradient = "#96f5ebff";
  } else {
    //bright blue
    startGradient = "#07bbedff";
  }

  console.log(endGradient + " " + startGradient);

  coloredLine.style.background = `linear-gradient(90deg,${startGradient} 0%, ${endGradient} 100%)`;
}

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

  //Change the color of the gradient depending on its min temperature.
  changeGradient(minTemp, maxTemp, coloredLine);

  dayItem.appendChild(dailyTitle);
  dayItem.appendChild(dailyIcon);

  const minMaxContainer = dayItem.appendChild(dailyMinMax);
  minMaxContainer.appendChild(dailyMin);
  const lineContainer = minMaxContainer.appendChild(line);
  lineContainer.appendChild(coloredLine);
  minMaxContainer.appendChild(dailyMax);

  return dayItem;
}
