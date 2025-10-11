import showDisplay from "./display-screen";
import { API_KEY } from "./env";
import { initCity } from "./initCity";

export default function mainScreen() {
  //Add event listener to the query search.

  //put up a default city.
  getCity("orlando");

  async function getCity(query) {
    try {
      let apiLink = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${API_KEY}`;
      const getCity = await fetch(apiLink);
      const data = await getCity.json();

      try {
        const currentCity = initCity(data);

        console.log(currentCity);

        showDisplay(data, currentCity);
      } catch (error) {
        console.log(error + " " + "Could not create city.");
      }
    } catch (erorr) {
      console.log("Error, could not fetch city.");
      return;
    }
  }

  const searchBar = document.querySelector("#search-query");

  searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      console.log("Enter.");
      getCity(e.target.value);
    }
  });
}
