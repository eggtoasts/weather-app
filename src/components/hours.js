import { clearContainer } from "../helpers/ui";
export default function days(currentCity) {
  const hourlyContainer = document.querySelector(".hourly-container");

  console.log(hourlyContainer);
  //Clear daily container
  clearContainer(hourlyContainer);

  const update = function () {};

  return { update };
}
