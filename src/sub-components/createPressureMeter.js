export default function createPressureMeter() {
  const pressureCircle = document.querySelector(".pressure-circle");
  pressureLineMaker(-55);

  function pressureLineMaker(far) {
    for (let i = -120; i <= 120; i += 8) {
      const currLine = makePressureLine();

      currLine.style.transform = `rotate(${i}deg) translateY(${far}px)`;
      pressureCircle.appendChild(currLine);
    }
  }

  addPressureMarker(-120, -55);

  function addPressureMarker(deg, far) {
    const currLine = makePressureMarker();
    currLine.style.transform = `rotate(${deg}deg) translateY(${far}px)`;
    pressureCircle.appendChild(currLine);
  }

  function makePressureLine() {
    const pressureLine = document.createElement("div");
    pressureLine.classList.add("pressure-line");

    return pressureLine;
  }

  function makePressureMarker() {
    const pressureMarker = document.createElement("div");
    pressureMarker.classList.add("pressure-marker");

    return pressureMarker;
  }
}
