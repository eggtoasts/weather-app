export default function moonPhase(currentCity) {
  const moonPhaseType = document.querySelector(".moon-phase-type");

  const convertMoonPhase = function (phase) {
    if ((phase >= 0.0 && phase <= 0.03) || (phase >= 0.97 && phase <= 1.0)) {
      return "New Moon";
    } else if (phase >= 0.03 && phase <= 0.22) {
      return "Waxing Cresent";
    } else if (phase >= 0.22 && phase <= 0.28) {
      return "First Quarter";
    } else if (phase >= 0.28 && phase <= 0.47) {
      return "Waxing Gibbous";
    } else if (phase >= 0.47 && phase <= 0.53) {
      return "Fll Moon";
    } else if (phase >= 0.53 && phase <= 0.72) {
      return "Waning Gibbous";
    } else if (phase >= 0.72 && phase <= 0.78) {
      return "Last Quarter";
    } else if (phase >= 0.78 && phase <= 0.97) {
      return "Waning Cresent";
    }
  };

  const update = function () {
    const phase = currentCity.moonphase;
    console.log(phase);
    moonPhaseType.textContent = convertMoonPhase(phase);
  };

  return { update };
}
