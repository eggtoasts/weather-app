import { clearContainer } from "../helpers/ui";
import { createDayElement } from "../dom/createDayElement";
export default function days(currentCity) {
  const dailyContainer = document.querySelector(".daily-container");
  const daysArray = currentCity.daysArray;

  const min = currentCity.minTempOfAll15Days;
  const max = currentCity.maxTempOfAll15Days;

  const update = function () {
    clearContainer(dailyContainer);
    for (let i = 0; i < 15; i++) {
      //daysArray[i];
      const element = createDayElement(daysArray[i], min, max);

      dailyContainer.appendChild(element);
    }
  };

  return { update };
}
