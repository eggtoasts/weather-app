import settings from "../settingsState";
import { convertToMm } from "../helpers/convert";

export default function precipitation(currentCity) {
  const precipNumber = document.querySelector(".precip-number");
  const precipProb = document.querySelector(".precip-prob");

  const update = function () {
    let precip = currentCity.precipitation;
    if (settings.precipUnit === "mm") {
      convertToMm(precip);
    }
    precipNumber.textContent = currentCity.precipitation + settings.precipUnit;
    precipProb.textContent =
      "Chances of Rainfall: " + currentCity.precipProbability + "%";
  };

  return { update };
}
