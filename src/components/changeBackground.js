export default function changeBackground(currentCity) {
  const body = document.querySelector("body");
  const moon = document.querySelector(".moon");
  const sun = document.querySelector(".sun");

  //Changing the compass circle backgrond based on bg color.
  const compassCircle = document.querySelector(".wind-circle");

  const update = function () {
    const currHour = currentCity.hourTime || currentCity.currentDateTime;
    const sunsetTime = Number(currentCity.sunset.substring(0, 2));
    const sunriseTime = Number(currentCity.sunrise.substring(0, 2));

    const hour = Number(currHour.substring(0, 2));

    moon.setAttribute("class", "moon hidden");
    sun.setAttribute("class", "sun hidden");

    let gradient = "";
    let circleColor = "";
    let bgColor = "";

    console.log(
      `sunset Time: ${sunsetTime + 1} Curr hour: ${hour} sunrise Time: ${
        sunsetTime - 1
      }`
    );

    if (sunsetTime + 1 >= hour && sunsetTime - 1 <= hour) {
      console.log("sunset");
      gradient = `linear-gradient(
    0deg,
    rgb(255, 137, 137) 20%,
    rgb(98, 92, 193) 100%
     )`;

      circleColor = "#B382B1";
    } else if (sunriseTime + 1 >= hour && sunriseTime - 1 <= hour) {
      console.log("sunrise");
      gradient = `linear-gradient(
    180deg,
    rgb(255, 137, 137) 20%,
    rgb(98, 92, 193) 100%
     )`;
      circleColor = "#CC86A2";
    } else if (hour <= 16 && hour >= 8) {
      console.log("day");
      gradient = `linear-gradient(
    180deg,
    rgb(49, 106, 162) 0%,
    rgb(111, 199, 253) 100%
     )`;
      circleColor = "#65A0CF";

      body.style[`background-color`] = circleColor;
      sun.classList.remove("hidden");
    } else {
      console.log("night");
      circleColor = "#36364D";
      gradient = `linear-gradient(
    180deg,
    rgb(33, 29, 53) 20%,
    rgb(23, 22, 30) 100%
      )`;
      moon.classList.remove("hidden");
      body.style[`background-color`] = circleColor;
    }

    body.style.background = gradient;
    compassCircle.style[`background-color`] = circleColor;
  };
  return { update };
}
