import showDisplay from "./display-screen";
import { API_KEY } from "./env";
import { initCity } from "./initCity";
import citySettings from "./settingsState";
import ripCafeWifiJSON from "./whenCafeWifiDies.json";

import createCompass from "./sub-components/createCompass";
import createPressureMeter from "./sub-components/createPressureMeter";

export default function mainScreen() {
  //Load in sub components
  createCompass();
  createPressureMeter();

  //Settings dialog
  const closeButton = document.querySelector(".done-button");
  const settingsButton = document.querySelector(".settings");
  const settingsDialog = document.querySelector(".settings-dialog");

  //Settings buttons
  const celsiusButton = document.querySelector(".celsius");
  const fahrenheitButton = document.querySelector(".fahrenheit");
  const windMButton = document.querySelector(".wind.m");
  const windKMButton = document.querySelector(".wind.km");

  //Error message
  const errorPopup = document.querySelector(".invalid-city-pop-up");

  let currentCity = "orlando";
  //    put up a default city.

  //Create settings
  let setting = citySettings();

  getCity(currentCity);

  //initialize setting to default
  setting.init("F", "M", "IN", "M", "M");

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
    setting.setTemperatureUnit("C");
    showDisplay(setting, currentCity);
  });

  fahrenheitButton.addEventListener("click", (e) => {
    setting.setTemperatureUnit("F");
    showDisplay(setting, currentCity);
  });

  windMButton.addEventListener("click", (e) => {
    setting.setWindUnit("M");
    showDisplay(setting, currentCity);
  });

  windKMButton.addEventListener("click", (e) => {
    setting.setWindUnit("KM");
    showDisplay(setting, currentCity);
  });

  async function getCity(query) {
    try {
      errorPopup.classList.add("hidden");
      //   let apiLink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${API_KEY}&contentType=json&elements=%2Baqius`;
      //   const getCity = await fetch(apiLink);
      //   const data = await getCity.json();
      const data = ripCafeWifiJSON;

      try {
        console.log(data);
        currentCity = initCity(data);

        console.log(currentCity);

        showDisplay(setting, currentCity);
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
