export class Day {
  constructor(date, iconType, minTemp, maxTemp) {
    this.date = date;
    this.iconType = iconType;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
    this.hourArray = [];
  }

  set setHourArray(hourArray) {
    this.hourArray = hourArray;
  }

  get getHourArray() {
    return this.hourArray;
  }
}
