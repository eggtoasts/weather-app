import { createWeatherAlert } from "../dom/createWeatherAlert";
import { clearContainer } from "../helpers/ui";

export default function weatherAlert(currentCity) {
  const weatherContainer = document.querySelector(".weather-alert-container");
  //Clear the container
  clearContainer(weatherContainer);

  const displayEveryAlert = function (alertArray) {
    alertArray.forEach((a) => {
      const alert = createWeatherAlert(a);
      weatherContainer.appendChild(alert);
    });
  };

  const update = function () {
    const alertArray = currentCity.alertArray;
    if (alertArray.length === 0) {
      const emptyNotif = createWeatherAlert(alertArray, "empty");
      weatherContainer.appendChild(emptyNotif);
    } else displayEveryAlert(alertArray);
  };
  return { update };
}
