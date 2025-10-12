export function createHourElement(currentHour) {
  const time = currentHour.time;
  const iconType = currentHour.iconType;
  const temp = currentHour.temp;

  const hourItem = document.createElement("div");
  const hourTitle = document.createElement("h4");
  const hourIcon = document.createElement("div");
  const hourTemp = document.createElement("h4");

  hourItem.classList.add("hour-item");
  hourTitle.classList.add("hour-title");
  hourIcon.classList.add("hour-icon");
  hourTemp.setAttribute("class", "hour-temp deg");

  hourTitle.textContent = time;
  hourIcon.textContent = iconType;
  hourTemp.textContent = temp;

  hourItem.appendChild(hourTitle);
  hourItem.appendChild(hourIcon);
  hourItem.appendChild(hourTemp);

  return hourItem;
}
