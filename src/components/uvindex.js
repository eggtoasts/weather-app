export default function uvIndex(currentCity) {
  const uvNumber = document.querySelector(".uv-index-number");
  const uvCondition = document.querySelector(".uv-index-condition");
  const uvCircle = document.querySelector(".uv-index.circle");
  console.log(uvCircle);

  function moveCircle(uvindex) {
    if (uvindex >= 15) uvindex = 15;
    uvCircle.style.transform = `translateX(${uvindex * 9.7}px)`;
  }

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
    const uvindex = currentCity.uvIndex;
    uvNumber.textContent = uvindex;
    uvCondition.textContent = updateUvIndexCondition(uvindex);
    moveCircle(uvindex);
  };
  return { update };
}
