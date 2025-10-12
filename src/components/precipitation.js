export default function precipitation(currentCity) {
  const precipNumber = document.querySelector(".precip-number");
  const precipProb = document.querySelector(".precip-prob");

  const update = function () {
    precipNumber.textContent = currentCity.precipitation + "''";
    precipProb.textContent =
      "Chances of Rainfall: " + currentCity.precipProbability + "%";
  };

  return { update };
}
