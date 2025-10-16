import showDisplay from "./display-screen";

import getCurrentCityLocation from "./apiHandling";

import createCompass from "./sub-components/createCompass";
import createPressureMeter from "./sub-components/createPressureMeter";

import settings from "./settingsState";
export default function mainScreen() {
  //Load in sub components
  createCompass();
  createPressureMeter();

  let data = "";

  let currentCity = "";

  //Gets city.
  data = getCurrentCityLocation(currentCity);

  //Settings dialog
  const closeButton = document.querySelector(".done-button");
  const settingsButton = document.querySelector(".settings");
  const settingsDialog = document.querySelector(".settings-dialog");

  //Settings buttons
  const celsiusButton = document.querySelector(".celsius");
  const fahrenheitButton = document.querySelector(".fahrenheit");
  const windMButton = document.querySelector(".wind.m");
  const windKMButton = document.querySelector(".wind.km");
  const hpaButton = document.querySelector(".pressure.hpa");
  const inhgButton = document.querySelector(".pressure.inhg");
  const directionMButton = document.querySelector(".dist.mi");
  const directionKMButton = document.querySelector(".dist.km");
  const precipInButton = document.querySelector(".precip.in");
  const precipMmButton = document.querySelector(".precip.mm");

  settingsButton.addEventListener("click", (e) => {
    if (!settingsDialog.classList.contains("hidden")) {
      settingsDialog.classList.add("hidden");
      return;
    }
    settingsDialog.classList.remove("hidden");
  });

  closeButton.addEventListener("click", (e) => {
    settingsDialog.classList.add("hidden");
  });

  celsiusButton.addEventListener("click", (e) => {
    settings.temperatureUnit = "C";
    console.log(settings);
    showDisplay(currentCity, data);
  });

  fahrenheitButton.addEventListener("click", (e) => {
    settings.temperatureUnit = "F";
    showDisplay(currentCity, data);
  });

  windMButton.addEventListener("click", (e) => {
    settings.windUnit = "mph";
    showDisplay(currentCity, data);
  });

  windKMButton.addEventListener("click", (e) => {
    settings.windUnit = "kmh";
    showDisplay(currentCity, data);
  });

  inhgButton.addEventListener("click", (e) => {
    settings.pressureUnit = "inhg";
    showDisplay(currentCity, data);
  });

  hpaButton.addEventListener("click", (e) => {
    settings.pressureUnit = "hpa";
    showDisplay(currentCity, data);
  });

  directionMButton.addEventListener("click", (e) => {
    settings.distanceUnit = "mi";
    showDisplay(currentCity, data);
  });

  directionKMButton.addEventListener("click", (e) => {
    settings.distanceUnit = "km";
    showDisplay(currentCity, data);
  });

  precipMmButton.addEventListener("click", (e) => {
    settings.precipUnit = "mm";
    showDisplay(currentCity, data);
  });

  precipInButton.addEventListener("click", (e) => {
    settings.precipUnit = "in";
    showDisplay(currentCity, data);
  });
}
