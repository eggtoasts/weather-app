import { Hour } from "../classes/Hour";
import { createHourElement } from "../dom/createHourElement";
import { clearContainer } from "../helpers/ui";
export default function days(query, currentCity) {
  const hourlyContainer = document.querySelector(".hourly-container");
  const description = document.querySelector(".hourly-weather-description");

  const daysArray = currentCity.daysArray[0];
  const hoursArray = daysArray.getHourArray;

  const update = function () {
    //Clear daily container
    clearContainer(hourlyContainer);

    description.textContent = currentCity.weatherDescription;

    for (let i = 0; i < 24; i++) {
      const element = hoursArray[i];
      const hourElement = createHourElement(query, element, i === 0);

      hourlyContainer.append(hourElement);
    }
  };

  return { update };
}
