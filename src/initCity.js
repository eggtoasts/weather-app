import { Day } from "./classes/Day";
import { Hour } from "./classes/Hour";

export let initCity = function (query) {
  //Later, find the weather condition of the current hour.

  console.log(query);

  //Main info
  const name = query.resolvedAddress;
  const temperature = query.currentConditions.temp;

  const weatherCondition = query.days[0].conditions;
  const weatherDescription = query.days[0].description;

  //Collected from the days array, the first day (Current day)
  const lowTemperature = query.days[0].tempmin;
  const highTemperature = query.days[0].tempmax;

  //The Weather components.

  //Precip
  const precipitation = query.currentConditions.precip;
  const precipProbability = query.days[0].precipprob;

  //Humidity
  const humidity = query.currentConditions.humidity;
  const dew = query.currentConditions.dew;

  //Sunrise and sunset
  const sunrise = query.currentConditions.sunrise;
  const sunset = query.currentConditions.sunset;

  //Wind
  const windSpeed = query.currentConditions.windspeed;
  const windGust = query.currentConditions.windgust;
  const windDirection = query.currentConditions.winddir;

  //Presure
  const pressure = query.currentConditions.pressure;

  //Visibility
  const visibility = query.currentConditions.visibility;

  //Moon Phase
  const moonPhase = query.currentConditions.moonphase;

  //Uv index
  const uvIndex = query.currentConditions.uvindex;

  //Air quality
  const airQuality = query.days[0].aqius;

  //Feels like
  const feelsLike = query.currentConditions.feelslike;
  const feelsLikeMax = query.days[0].feelslikemax;
  const feelsLikeMin = query.days[0].feelslikemin;

  //Severe risk
  const severeRisk = query.days[0].severerisk;

  //Daily weather
  const dailyWeatherArray = [];

  console.log(query.days);
  console.log(query.days[0].hours);

  for (let i = 0; i < query.days.length; i++) {
    let currDay = query.days[i];
    const day = new Day(
      currDay.datetime,
      currDay.icon,
      currDay.tempmax,
      currDay.tempmin
    );
    dailyWeatherArray.push(day);
  }

  //Hourly weather
  const hourlyWeatherArray = [];
  for (let i = 0; i < query.days[0].hours.length; i++) {
    let currHour = query.days[0].hours[i];
    const hour = new Hour(currHour.datetime, currHour.icon, currHour.temp);
    hourlyWeatherArray.push(hour);
  }

  console.log(dailyWeatherArray);
  console.log(hourlyWeatherArray);

  let cnt = 0;
  [
    name,
    temperature,
    weatherCondition,
    weatherDescription,
    lowTemperature,
    highTemperature,
    precipitation,
    precipProbability,
    humidity,
    dew,
    sunrise,
    sunset,
    windSpeed,
    windGust,
    windDirection,
    pressure,
    visibility,
    uvIndex,
    feelsLike,
    feelsLikeMax,
    feelsLikeMin,
    severeRisk,
  ].forEach((e) => {
    cnt++;
    console.log(cnt + " " + e);
  });

  //Getters

  const getMoonPhase = function () {
    return moonPhase;
  };
  const getAirQuality = function () {
    return airQuality;
  };

  const getName = function () {
    return name;
  };

  const getTemperature = function () {
    return temperature;
  };

  const getWeatherCondition = function () {
    return weatherCondition;
  };

  const getWeatherDescription = function () {
    return weatherDescription;
  };

  const getLowTemperature = function () {
    return lowTemperature;
  };

  const getHighTemperature = function () {
    return highTemperature;
  };

  const getPrecipitation = function () {
    return precipitation;
  };

  const getPrecipProbability = function () {
    return precipProbability;
  };

  const getHumidity = function () {
    return humidity;
  };

  const getDew = function () {
    return dew;
  };

  const getSunrise = function () {
    return sunrise;
  };

  const getSunset = function () {
    return sunset;
  };

  const getWindSpeed = function () {
    return windSpeed;
  };

  const getWindGust = function () {
    return windGust;
  };

  const getWindDirection = function () {
    return windDirection;
  };

  const getPressure = function () {
    return pressure;
  };

  const getVisibility = function () {
    return visibility;
  };

  const getUvIndex = function () {
    return uvIndex;
  };

  const getFeelsLike = function () {
    return feelsLike;
  };

  const getFeelsLikeMax = function () {
    return feelsLikeMax;
  };

  const getFeelsLikeMin = function () {
    return feelsLikeMin;
  };

  const getSevereRisk = function () {
    return severeRisk;
  };

  return {
    getMoonPhase,
    getAirQuality,
    getName,
    getTemperature,
    getWeatherCondition,
    getWeatherDescription,
    getLowTemperature,
    getHighTemperature,
    getPrecipitation,
    getPrecipProbability,
    getHumidity,
    getDew,
    getSunrise,
    getSunset,
    getWindSpeed,
    getWindGust,
    getWindDirection,
    getPressure,
    getVisibility,
    getUvIndex,
    getFeelsLike,
    getFeelsLikeMax,
    getFeelsLikeMin,
    getSevereRisk,
    airQuality,
  };
};
