import { Day } from "./classes/Day";
import { Hour } from "./classes/Hour";

function apiHourToHourClass(hourQuery) {
  return new Hour(
    hourQuery.datetime,
    hourQuery.icon,
    hourQuery.temp,
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

function apiDayToDayClass(dayQuery) {
  const day = new Day(
    dayQuery.datetime,
    dayQuery.icon,
    dayQuery.tempmax,
    dayQuery.tempmin
  );

  day.setHourArray = dayQuery.hours.map(apiHourToHourClass);
  return day;
}

export let initCity = function (query, hour) {
  const currentSource = hour || query.currentConditions;

  const weatherData = {
    //Main Info
    name: query.resolvedAddress,
    temperature: currentSource.temp,
    weatherCondition: query.days[0].conditions,
    weatherDescription: query.days[0].description,
    currentDateTime: query.currentConditions.datetime,

    //Other properties
    precipitation: query.currentConditions.precip,
    precipProbability: query.days[0].precipprob,
    lowTemperature: query.days[0].tempmin,
    highTemperature: query.days[0].tempmax,
    humidity: query.currentConditions.humidity,
    dew: query.currentConditions.dew,
    sunrise: query.currentConditions.sunrise,
    sunset: query.currentConditions.sunset,
    windSpeed: query.currentConditions.windspeed,
    windGust: query.currentConditions.windgust,
    windDirection: query.currentConditions.winddir,
    pressure: query.currentConditions.pressure,
    visibility: query.currentConditions.visibility,
    moonPhase: query.currentConditions.moonphase,
    uvIndex: query.currentConditions.uvindex,
    airQuality: query.days[0].aqius,
    feelsLike: query.currentConditions.feelslike,
    feelsLikeMax: query.days[0].feelslikemax,
    feelsLikeMin: query.days[0].feelslikemin,

    severeRisk: query.days[0].severerisk,

    daysArray: query.days.map((d) => apiDayToDayClass(d)),
  };

  return weatherData;
};
