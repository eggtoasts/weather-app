export default function airQuality(currentCity) {
  const airQualityNumber = document.querySelector(".air-quality-number");
  const airQualityCircle = document.querySelector(".air-quality.circle");
  const airQualityCondition = document.querySelector(".air-quality-condition");
  //Moves the air quality circle.

  console.log(airQualityCircle);

  function updateCondition(aqi) {
    if (aqi >= 0 && aqi <= 50) {
      return "Good Air Quality";
    } else if (aqi >= 51 && aqi <= 100) {
      return "Moderate Air Quality";
    } else if (aqi >= 101 && aqi <= 150) {
      return "Unhealthy Air Quality";
    } else if (aqi >= 151 && aqi <= 200) {
      return "Unhealthy Air Quality";
    } else if (aqi >= 201 && aqi <= 300) {
      return "Very Unhealthy Air Quality";
    } else if (aqi >= 301) {
      return "Hazardous";
    }
  }

  function moveCircle(aqi) {
    airQualityCircle.style.transform = `translateX(${aqi}px)`;
  }

  const update = function () {
    const aqi = currentCity.getAirQuality();
    airQualityNumber.textContent = aqi;
    moveCircle(aqi);
    airQualityCondition.textContent = updateCondition(aqi);
  };

  return { update };
}
