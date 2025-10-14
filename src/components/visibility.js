import settings from "../settingsState";
import { convertToKm } from "../helpers/convert";
export default function visibility(currentCity) {
  const visibilityNumber = document.querySelector(".visibility-number");
  const visibilityDescription = document.querySelector(
    ".visibility-description"
  );

  const updateVisibilityDescription = function (vis) {
    if (vis >= 10) {
      return "Perfectly clear view.";
    } else if (vis >= 6) {
      return "Clear view.";
    } else {
      return "Light haze is affecting visibility.";
    }
  };

  const update = function () {
    let visibility = currentCity.visibility;
    visibilityDescription.textContent = updateVisibilityDescription(visibility);
    if (settings.distanceUnit === "km") visibility = convertToKm(visibility);
    visibilityNumber.textContent = visibility + " " + settings.distanceUnit;
  };

  return { update };
}
