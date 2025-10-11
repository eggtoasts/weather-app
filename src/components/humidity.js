export default function humidity(currentCity) {
  const humidityNumber = document.querySelector(".humidity-number");
  const dew = document.querySelector(".humidity-dew");

  const update = function () {
    humidityNumber.textContent = currentCity.getHumidity();
    dew.textContent = `The dew point is ${currentCity.getDew()} right now.`;
  };

  return { update };
}
