export let initCity = function (query) {
  //Later, find the weather condition of the current hour.

  //Main info
  const name = query.address;
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

  //Uv index
  const uvIndex = query.currentConditions.uvindex;

  //Feels like
  const feelsLike = query.currentConditions.feelslike;
  const feelsLikeMax = query.days[0].feelslikemax;
  const feelsLikeMin = query.days[0].feelslikemin;

  //Severe risk
  const severeRisk = query.days[0].severerisk;

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

  return {};
};
