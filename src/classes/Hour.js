export class Hour {
  constructor(
    time,
    iconType,
    temp,
    humidity,
    dew,
    precip,
    precipprob,
    windgust,
    windspeed,
    winddir,
    pressure,
    visibility,
    uvindex,
    severerisk,
    aqius,
    conditions,
    icon
  ) {
    this.time = time;
    this.iconType = iconType;
    this.temp = temp;

    //Other info
    this.humidity = humidity;
    this.dew = dew;
    this.precip = precip;
    this.precipprob = precipprob;
    this.windgust = windgust;
    this.windspeed = windspeed;
    this.winddir = winddir;
    this.pressure = pressure;
    this.visibility = visibility;
    this.uvindex = uvindex;
    this.severerisk = severerisk;
    this.aqius = aqius;
    this.conditions = conditions;
    this.icon = icon;
  }
}
