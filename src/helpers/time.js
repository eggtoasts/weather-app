export function convertTo12Hour(currHour, hasMinutes) {
  if (currHour === "Now") return currHour;

  const hour = Number(currHour.substring(0, 2));

  if (hasMinutes) {
    const minutes = Number(currHour.substring(3, 5));

    if (hour === 0) {
      return `12:${minutes} AM`;
    } else if (hour === 12) {
      return `12:${minutes} PM`;
    } else if (hour < 12) {
      return `${hour}:${minutes} AM`;
    } else {
      return `${hour % 12}:${minutes} PM`;
    }
  }

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
