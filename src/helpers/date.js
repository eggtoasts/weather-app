const {
  isToday,
  parseISO,
  format,
  isMonday,
  isTuesday,
  isWednesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday,
} = require("date-fns");
//Converts format of dates

export function formatDate(currDate) {
  const date = new Date(parseISO(currDate));
  const formattedDate = format(date, "MMMMMMM dd, yyyy");

  return formattedDate;
}

export function formatToWeekdays(currDate) {
  const todayDate = new Date(parseISO(currDate));

  if (isToday(todayDate)) {
    return "Today";
  } else if (isMonday(todayDate)) {
    return "Mon";
  } else if (isTuesday(todayDate)) {
    return "Tue";
  } else if (isWednesday(todayDate)) {
    return "Wed";
  } else if (isThursday(todayDate)) {
    return "Thur";
  } else if (isFriday(todayDate)) {
    return "Fri";
  } else if (isSaturday(todayDate)) {
    return "Sat";
  } else if (isSunday(todayDate)) {
    return "Sun";
  }
}
