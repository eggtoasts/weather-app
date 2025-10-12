export default function severeRisk(currentCity) {
  const severeRiskNumber = document.querySelector(".severe-risk-number");
  const severeRiskType = document.querySelector(".severe-risk-type");

  const updateRiskNumber = function (risk) {
    if (risk < 30) {
      return "Low";
    } else if (risk < 70) {
      return "Moderate";
    } else {
      return "High";
    }
  };

  const update = function () {
    const risk = currentCity.severeRisk;
    severeRiskNumber.textContent = updateRiskNumber(risk);
    severeRiskType.textContent = `There is a ${risk}% chance of severe storms.`;
  };

  return { update };
}
