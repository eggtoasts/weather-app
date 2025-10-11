export default function wind(currentCity) {
  const windGust = document.querySelector(".wind-gusts-number");
  const windSpeed = document.querySelector(".wind-number");
  const windDir = document.querySelector(".wind-dir-number");
  const arrow = document.querySelector(".arrow");
  const windCircleNumber = document.querySelector(".wind-circle-number");

  function moveArrow(dir) {
    //add animation maybe? :]
    arrow.style.transform = `rotate(${dir}deg)`;
  }
  const update = function () {
    const gust = currentCity.getWindGust();
    const speed = currentCity.getWindSpeed();
    const dir = currentCity.getWindDirection();
    console.log(gust + " " + " " + speed + " " + dir);
    windGust.textContent = gust;
    windSpeed.textContent = speed;
    windDir.textContent = dir;
    windCircleNumber.textContent = speed;
    moveArrow(dir);
  };

  return { update };
}
