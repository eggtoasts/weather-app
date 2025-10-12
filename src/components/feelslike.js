export default function feelslike(currentCity) {
  const feelsLikeNumber = document.querySelector(".feels-like-number");
  const feelsLikeTemp = document.querySelector(".feels-like-actual");
  const feelsLikeDescription = document.querySelector(
    ".feels-like-description"
  );

  function updateDescription(feelslike, temp) {
    if (feelslike === temp) {
      return "Similar to the actual temperature.";
    } else if (feelslike < temp) {
      return "It feels colder than the actual temperature.";
    } else if (feelslike > temp) {
      return "It feels warmer than the actual temperature.";
    }
  }

  const update = function () {
    const feelslike = currentCity.feelsLike;
    const temp = currentCity.temperature;
    feelsLikeNumber.textContent = feelslike;
    feelsLikeTemp.textContent = temp;
    feelsLikeDescription.textContent = updateDescription(feelslike, temp);
  };

  return { update };
}
