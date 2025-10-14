import { Day } from "./classes/Day";
import { Hour } from "./classes/Hour";

function findMin(daysArray) {
  let mn = 200;

  for (let i = 0; i < 15; i++) {
    mn = Math.min(mn, daysArray[i].tempmin);
  }
  console.log(mn);
  return Math.round(mn);
}

function findMax(daysArray) {
  let mx = -200;

  for (let i = 0; i < 15; i++) {
    mx = Math.max(mx, daysArray[i].tempmax);
  }
  return Math.round(mx);
}

function apiHourToHourClass(hourQuery, currentDateTime) {
  return new Hour(
    hourQuery.datetime || "Now",
    hourQuery.icon,
    Math.round(hourQuery.temp),
    hourQuery.humidity,
    hourQuery.dew,
    hourQuery.precip,
    hourQuery.precipprob,
    hourQuery.windgust,
    hourQuery.windspeed,
    hourQuery.winddir,
    hourQuery.pressure,
    hourQuery.visibility,
    hourQuery.uvindex,
    hourQuery.severerisk,
    hourQuery.aqius,
    hourQuery.conditions,
    hourQuery.icon
  );
}

function apiDayToDayClass(dayQuery, currentDate, currentDateTime, query) {
  const day = new Day(
    dayQuery.datetime,
    dayQuery.icon,
    Math.round(dayQuery.tempmin),
    Math.round(dayQuery.tempmax)
  );

  if (dayQuery.datetime === currentDate) {
    const currentDayHour = new Hour(
      query.currentConditions.datetime,
      query.currentConditions.icon,
      Math.round(query.currentConditions.temp),
      query.currentConditions.humidity,
      query.currentConditions.dew,
      query.currentConditions.precip,
      query.currentConditions.precipprob,
      query.currentConditions.windgust,
      query.currentConditions.windspeed,
      query.currentConditions.winddir,
      query.currentConditions.pressure,
      query.currentConditions.visibility,
      query.currentConditions.uvindex,
      query.days[0].severerisk,
      query.currentConditions.aqius,
      query.currentConditions.conditions,
      query.currentConditions.icon
    );

    let arr = [currentDayHour];
    const hour = Number(currentDateTime.substring(0, 2)) + 1;
    console.log(hour);

    const left = 24 - (24 - hour) - 1;

    const next24HoursArray = arr.concat(
      query.days[0].hours.slice(hour).concat(query.days[1].hours.slice(0, left))
    );

    day.setHourArray = next24HoursArray.map((h) =>
      apiHourToHourClass(h, currentDateTime)
    );
    console.log(day.setHourArray);

    return day;
  }

  day.setHourArray = dayQuery.hours.map(apiHourToHourClass);

  return day;
}

export let initCity = function (query, hour, dayNumber) {
  const currentSource = hour || query.currentConditions;

  //check days date later, after we finished hours
  const currentDate = query.days[dayNumber].datetime;
  const currentDateTime = query.currentConditions.datetime;

  const weatherData = {
    //Main Info
    name: query.resolvedAddress,
    temperature: Math.round(currentSource.temp),
    weatherCondition:
      currentSource.conditions || query.days[dayNumber].conditions,
    weatherDescription: query.days[dayNumber].description,
    currentDate: currentDate,
    currentDateTime: currentDateTime,
    hourTime: currentSource.time,

    //Other properties
    precipitation: currentSource.precip,
    precipProbability: query.days[dayNumber].precipprob,
    lowTemperature: Math.round(query.days[dayNumber].tempmin),
    highTemperature: Math.round(query.days[dayNumber].tempmax),
    humidity: currentSource.humidity,
    dew: currentSource.dew,
    sunrise: query.currentConditions.sunrise,
    sunset: query.currentConditions.sunset,
    windSpeed: currentSource.windspeed,
    windGust: currentSource.windgust,
    windDirection: currentSource.winddir,
    pressure: currentSource.pressure,
    visibility: currentSource.visibility,
    moonPhase: query.currentConditions.moonphase,
    uvIndex: currentSource.uvindex,
    airQuality: currentSource.aqius,
    feelsLike: Math.round(query.currentConditions.feelslike),
    feelsLikeMax: Math.round(query.days[dayNumber].feelslikemax),
    feelsLikeMin: Math.round(query.days[dayNumber].feelslikemin),

    severeRisk: query.days[dayNumber].severerisk,

    daysArray: query.days.map((d) =>
      apiDayToDayClass(d, currentDate, currentDateTime, query)
    ),

    minTempOfAll15Days: findMin(query.days),
    maxTempOfAll15Days: findMax(query.days),
  };

  return weatherData;
};
