export default function visibility(currentCity, currentMeasure) {
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
    const visibility = currentCity.getVisibility();
    visibilityNumber.textContent = visibility;
    visibilityDescription.textContent = updateVisibilityDescription(visibility);
  };

  return { update };
}
