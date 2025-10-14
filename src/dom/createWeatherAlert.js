export function createWeatherAlert(currentAlert, empty) {
  const weatherAlertItem = document.createElement("div");
  const alertTitle = document.createElement("h3");
  const alertDescription = document.createElement("h4");
  weatherAlertItem.classList.add("weather-alert-item");

  //If empty, display that there are no alerts.
  if (empty) {
    alertTitle.textContent = "No alerts.";
    alertDescription.textContent =
      "There are no weather alerts at this moment in this area.";
  } else {
    alertTitle.textContent = currentAlert.event;
    alertDescription.textContent = currentAlert.headline;
  }

  weatherAlertItem.appendChild(alertTitle);
  weatherAlertItem.appendChild(alertDescription);

  return weatherAlertItem;
}
