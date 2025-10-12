import { Hour } from "../classes/Hour";
import { createHourElement } from "../dom/createHourElement";
import { clearContainer } from "../helpers/ui";
export default function days(query, currentCity, setting) {
  const hourlyContainer = document.querySelector(".hourly-container");

  console.log(hourlyContainer);
  //Clear daily container
  clearContainer(hourlyContainer);

  const daysArray = currentCity.daysArray[0];
  const hoursArray = daysArray.getHourArray;

  for (let i = 0; i < 24; i++) {
    const element = hoursArray[i];
    const hourElement = createHourElement(query, element, null, setting);
    hourlyContainer.append(hourElement);
  }

  const update = function () {};

  return { update };
}
