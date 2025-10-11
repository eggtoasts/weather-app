export default function citySettings() {
  //Setting default

  let temperatureUnit;
  let windUnit;
  let precipUnit;
  let pressureUnit;
  let distanceUnit;

  function init(temp, wind, precip, pressure, dist) {
    temperatureUnit = temp;
    windUnit = wind;
    precipUnit = precip;
    pressureUnit = pressure;
    distanceUnit = dist;
  }

  const setTemperatureUnit = function (unit) {
    temperatureUnit = unit;
  };

  const setWindUnit = function (unit) {
    windUnit = unit;
  };

  const setPrecipUnit = function (unit) {
    precipUnit = unit;
  };

  const setPressureUnit = function (unit) {
    pressureUnit = unit;
  };

  const setDistanceUnit = function (unit) {
    distanceUnit = unit;
  };

  const getTemperatureUnit = function () {
    return temperatureUnit;
  };

  const getWindUnit = function () {
    return windUnit;
  };

  const getPrecipUnit = function () {
    return precipUnit;
  };

  const getPressureUnit = function () {
    return pressureUnit;
  };

  const getDistanceUnit = function () {
    return distanceUnit;
  };

  return {
    init,
    setTemperatureUnit,
    setWindUnit,
    setPrecipUnit,
    setPressureUnit,
    setDistanceUnit,
    getWindUnit,
    getDistanceUnit,
    getPrecipUnit,
    getPressureUnit,
    getTemperatureUnit,
  };
}
