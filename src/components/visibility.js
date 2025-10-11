export default function visibility(currentCity, currentMeasure) {
  const visibilityNumber = document.querySelector(".visibility-number");
  const visibilityDescription = document.querySelector(
    ".visibility-description"
  );
  const update = function () {
    visibilityNumber.textContent = currentCity.getVisibility();
  };

  return { update };
}
