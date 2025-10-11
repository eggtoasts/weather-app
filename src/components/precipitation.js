export default function precipitation(currentCity) {
  const precipNumber = document.querySelector(".precip-number");
  const precipProb = document.querySelector(".precip-prob");

  const update = function () {
    precipNumber.textContent = currentCity.getPrecipitation() + "''";
    precipProb.textContent =
      "Chances of Rainfall: " + currentCity.getPrecipProbability() + "%";
  };

  return { update };
}
