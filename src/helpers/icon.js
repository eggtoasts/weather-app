export function setIcon(icontype) {
  //Create div element
  const element = document.createElement("div");
  element.setAttribute("class", "hour-icon iconify");
  //We assign the icon's data-icon name to corresponding case
  switch (icontype) {
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
