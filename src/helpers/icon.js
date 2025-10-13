export function setWeatherIcon(iconType) {
  //Create div element
  const element = document.createElement("div");
  element.setAttribute("class", "hour-icon iconify");
  //We assign the icon's data-icon name to corresponding case
  switch (iconType) {
    case "snow":
      element.setAttribute("data-icon", "mdi-snowflake");
      break;
    case "rain":
      element.setAttribute("data-icon", "mdi-weather-pouring");
      break;
    case "fog":
      element.setAttribute("data-icon", "mdi-weather-fog");
      break;
    case "wind":
      element.setAttribute("data-icon", "mdi-weather-windy");
      break;
    case "cloudy":
      element.setAttribute("data-icon", "mdi-weather-cloudy");
      break;
    case "partly-cloudy-day":
      element.setAttribute("data-icon", "mdi-weather-partly-cloudy");
      break;
    case "partly-cloudy-night":
      element.setAttribute("data-icon", "mdi-weather-night-partly-cloudy");
      break;
    case "clear-day":
      element.setAttribute("data-icon", "mdi-weather-sunny");
      break;
    case "clear-night":
      element.setAttribute("data-icon", "mdi-weather-night");
      break;
  }

  return element;
}

export function setMoonIcon(phaseType) {
  const topMoon = document.createElement("div");
  topMoon.setAttribute("class", "iconify top-moon");

  switch (phaseType) {
    case "newMoon":
      topMoon.setAttribute("data-icon", "mdi-moon-new");
      break;
    case "Waxing Cresent":
      topMoon.setAttribute("data-icon", "mdi-moon-waxing-cresent");
      break;
    case "First Quarter":
      topMoon.setAttribute("data-icon", "mdi-moon-first-quarter");
      break;
    case "Waxing Gibbous":
      topMoon.setAttribute("data-icon", "mdi-moon-waxing-gibbous");
      break;
    case "Full Moon":
      topMoon.setAttribute("data-icon", "mdi-moon-full");
      break;
    case "Waning Gibbous":
      topMoon.setAttribute("data-icon", "mdi-moon-waning-gibbous");
      break;
    case "Last Quarter":
      console.log("br");
      topMoon.setAttribute("data-icon", "mdi-moon-last-quarter");
      break;
    case "Waning Cresent":
      topMoon.setAttribute("data-icon", "mdi-moon-waning-cresent");
      break;
  }
  return topMoon;
}
