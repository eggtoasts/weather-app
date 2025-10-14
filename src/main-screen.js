import showDisplay from "./display-screen";
import { API_KEY } from "./env";
import { initCity } from "./initCity";
import ripCafeWifiJSON from "./whenCafeWifiDies.json";

import createCompass from "./sub-components/createCompass";
import createPressureMeter from "./sub-components/createPressureMeter";

import settings from "./settingsState";
export default function mainScreen() {
  //Load in sub components
  createCompass();
  createPressureMeter();

  let data = "";

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

  //Error message
  const errorPopup = document.querySelector(".invalid-city-pop-up");

  //Put up a default city.
  let currentCity = "orlando";

  getCity(currentCity);
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

  async function getCity(query) {
    try {
      errorPopup.classList.add("hidden");
      let apiLink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${API_KEY}&contentType=json&elements=%2Baqius`;
      const getCity = await fetch(apiLink);
      data = await getCity.json();
      // const data = ripCafeWifiJSON;

      try {
        console.log(data);
        currentCity = initCity(data, null, 0);
        console.log(currentCity);
        showDisplay(currentCity, data);
      } catch (error) {
        console.log(error.stack + " " + "Could not create city.");
      }
    } catch (erorr) {
      console.log(error.stack + " Error, could not fetch city.");
      errorPopup.classList.remove("hidden");
      return;
    }
  }

  //Add event listener to the query search.
  const searchBar = document.querySelector("#search-query");

  searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      console.log("Enter.");
      getCity(e.target.value);
    }
  });
}
