import { clearContainer } from "../helpers/ui";
import { createDayElement } from "../dom/createDayElement";
export default function days(currentCity) {
  const dailyContainer = document.querySelector(".daily-container");
  clearContainer(dailyContainer);

  //Display 12:00 of that day.

  const daysArray = currentCity.daysArray;

  for (let i = 0; i < 15; i++) {
    //daysArray[i];
    const element = createDayElement(daysArray[i]);

    dailyContainer.appendChild(element);
  }

  const update = function () {};

  return {};
}
