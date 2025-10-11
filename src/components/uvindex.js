export default function uvIndex(currentCity) {
  const uvNumber = document.querySelector(".uv-index-number");
  const uvCondition = document.querySelector(".uv-index-condition");

  function updateUvIndexCondition(uv) {
    if (uv <= 2) {
      return "Low";
    } else if (uv <= 5) {
      return "Moderate";
    } else if (uv <= 7) {
      return "High";
    } else if (uv <= 10) {
      return "Very High";
    } else {
      return "Extreme";
    }
  }
  const update = function () {
    const uvindex = currentCity.getUvIndex();
    uvNumber.textContent = uvindex;
    uvCondition.textContent = updateUvIndexCondition(uvindex);
  };
  return { update };
}
