function citySettings(
  temperatureUnit,
  windUnit,
  precipUnit,
  pressureUnit,
  distanceUnit
) {
  //Setting default
  const settingsData = {
    temperatureUnit,
    windUnit,
    precipUnit,
    pressureUnit,
    distanceUnit,
  };

  console.log(settingsData);

  return settingsData;
}

//Create settings and initialize setting to default
const settings = citySettings("F", "mph", "in", "hpa", "mi");

export default settings;
