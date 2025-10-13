export function convertTo12Hour(currHour) {
  if (currHour === "Now") return currHour;

  const hour = Number(currHour.substring(0, 2));

  if (hour === 0) {
    return "12 AM";
  } else if (hour === 12) {
    return "12 PM";
  } else if (hour < 12) {
    return hour + "AM";
  } else {
    return (hour % 12) + "PM";
  }
}
