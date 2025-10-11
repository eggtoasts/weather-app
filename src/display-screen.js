import mainInformation from "./components/main-information";
import humidity from "./components/humidity";
import airQuality from "./components/airquality";
import precipitation from "./components/precipitation";
import feelslike from "./components/feelslike";
import wind from "./components/wind";
import pressure from "./components/pressure";
import visibility from "./components/visibility";

export default function showDisplay(setting, currentCity) {
  //Main information (City name, temperature, etc...)
  //Display Main Information
  const mim = mainInformation(currentCity, setting);
  mim.update();

  //Display humidity
  const hm = humidity(currentCity);
  hm.update();

  //Display air quality
  const aqm = airQuality(currentCity);
  aqm.update();

  //Display precipitation
  const pm = precipitation(currentCity);
  pm.update();

  //Display feels like
  const fm = feelslike(currentCity);
  fm.update();

  //Display wind
  const wm = wind(currentCity, setting);
  wm.update();
  console.log(window.screen);

  //Display pressure
  const prem = pressure(currentCity, setting);
  prem.update();

  //Display visibility
  const vm = visibility(currentCity, setting);
  vm.update();

  //Display sunrise/sunset
}
