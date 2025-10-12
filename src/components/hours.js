import { createHourElement } from "../dom/createHourElement";
import { clearContainer } from "../helpers/ui";
export default function days(currentCity) {
  const hourlyContainer = document.querySelector(".hourly-container");

  console.log(hourlyContainer);
  //Clear daily container
  clearContainer(hourlyContainer);

  const hoursArray = currentCity.getHoursArray();

  hoursArray.forEach((element) => {
    console.log(element);
    const hourElement = createHourElement(element);
    hourlyContainer.append(hourElement);
  });

  const update = function () {};

  return { update };
}
