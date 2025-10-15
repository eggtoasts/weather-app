import { convertTo12Hour } from "../helpers/time";
export default function sunriseSunset(currentCity) {
  const sunriseTitle = document.querySelector(".sunrise-title");
  const sunriseNumber = document.querySelector(".sunrise-number");
  const subText = document.querySelector(".sunrise-diff-number");

  const checkIfSunrisePassed = function (currentTime, sunriseTime) {
    //String comparators should work on time
    if (sunriseTime < currentTime) {
      return true;
    } else {
      return false;
    }
  };

  const update = function () {
    const sunriseTime = currentCity.sunrise;
    const sunsetTime = currentCity.sunset;
    const currentTime = currentCity.currentDateTime;

    //if sunrise has passed, display sunset times.
    if (checkIfSunrisePassed(currentTime, sunriseTime, sunsetTime)) {
      sunriseTitle.textContent = "Sunset";
      sunriseNumber.textContent = convertTo12Hour(sunsetTime, true);

      //display sunrise on the smallet text
      subText.textContent = "Sunrise : " + convertTo12Hour(sunriseTime, true);
    } else {
      //if sunrise hasn't passed, display sunrise.
      sunriseNumber.textContent = convertTo12Hour(sunriseTime, true);

      //display sunset on the smallet text
      subText.textContent = "Sunset : " + convertTo12Hour(sunsetTime, true);
    }
  };

  return { update };
}
