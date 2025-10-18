import { API_KEY, geo_API_KEY } from "./env";
import { initCity } from "./initCity";
import showDisplay from "./display-screen";
import ripCafeWifiJSON from "./whenCafeWifiDies.json";

function apiHandler(currentCity) {
  //Loading screen
  const loadingScreen = document.querySelector(".loading-screen");

  //Error message
  const errorPopup = document.querySelector(".invalid-city-pop-up");

  //Geo API
  async function getLocation() {
    try {
      //Set the location with user's geolocation
      let apiLink = `https://api.ipgeolocation.io/v2/ipgeo?apiKey=${geo_API_KEY}&fields=location.city`;
      const location = await fetch(apiLink);

      const data = await location.json();

      return data.location.city;
    } catch (error) {
      //Just set a default location if we cannot get the IP.
      return "San Diego";
    }
  }

  //Put up a default city.
  async function getCurrentCityLocation() {
    let location = await getLocation();
    const { data, currentCity } = await getCity(location);

    //Returns the data and current city.
    return { data, currentCity };
  }

  // Weather API
  async function getCity(query) {
    try {
      loadingScreen.classList.remove("hidden");
      errorPopup.classList.add("hidden");
      let apiLink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${API_KEY}&contentType=json&elements=%2Baqius`;
      const city = await fetch(apiLink);

      console.log("Loading....");

      const data = await city.json();

      //Stop displaying loading screen after we've recieved the data
      loadingScreen.classList.add("hidden");
      console.log(loadingScreen);

      try {
        console.log(data);
        currentCity = initCity(data, null, 0);
        console.log(currentCity);
        showDisplay(currentCity, data);

        return { data, currentCity };
      } catch (error) {
        console.log(error.stack + " " + "Could not create city.");
      }
    } catch (error) {
      console.log(error.stack + " Error, could not fetch city.");
      errorPopup.classList.remove("hidden");
      loadingScreen.classList.add("hidden");
      return;
    }
  }

  return { getCurrentCityLocation, getCity };
}

const apiModule = apiHandler();

const { getCurrentCityLocation, getCity } = apiModule;

export { getCurrentCityLocation, getCity };
