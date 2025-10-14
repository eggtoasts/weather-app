import mainInformation from "./components/main-information";
import humidity from "./components/humidity";
import airQuality from "./components/airquality";
import precipitation from "./components/precipitation";
import feelslike from "./components/feelslike";
import wind from "./components/wind";
import pressure from "./components/pressure";
import visibility from "./components/visibility";
import uvIndex from "./components/uvindex";
import moonPhase from "./components/moonphase";
import severeRisk from "./components/severerisk";
import days from "./components/days";
import hours from "./components/hours";
import weatherAlert from "./components/weatheralert";

export default function showDisplay(currentCity, query) {
  //Main information (City name, temperature, etc...)
  //Display Main Information
  const mim = mainInformation(currentCity);
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
  const wm = wind(currentCity);
  wm.update();
  console.log(window.screen);

  //Display pressure
  const prem = pressure(currentCity);
  prem.update();

  //Display visibility
  const vm = visibility(currentCity);
  vm.update();

  //Display UV Index
  const uim = uvIndex(currentCity);
  uim.update();

  //Display Moon Phase
  const mm = moonPhase(currentCity);
  mm.update();

  //Display sunrise/sunset
  const sm = severeRisk(currentCity);
  sm.update();

  //Display days
  const dm = days(currentCity);
  dm.update();

  //Display hours
  const hom = hours(query, currentCity);
  hom.update();

  //Display weather alert
  const wam = weatherAlert(currentCity);
  wam.update();
}
