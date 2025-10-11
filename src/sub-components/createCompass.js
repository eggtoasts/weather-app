export default function createCompass() {
  //compass line maker

  const far = 55;

  const windCircle = document.querySelector(".wind-circle");
  compassLineMaker(far);

  function compassLineMaker(far) {
    for (let i = 0; i < 360; i += 5) {
      const currLine = makeCompassLine();

      if (checkIfLineShouldBePlaced(i)) continue;

      currLine.style.transform = `rotate(${i}deg) translateY(${far}px)`;
      windCircle.appendChild(currLine);
      if (i % 45 == 0) {
        currLine.classList.add("bold");
      }
    }
  }

  function checkIfLineShouldBePlaced(i) {
    return (
      (i < 100 && i > 80) ||
      (i < 190 && i > 170) ||
      (i < 280 && i > 260) ||
      (i < 370 && i > 350) ||
      i < 10
    );
  }

  function makeCompassLine() {
    const compassLine = document.createElement("div");
    compassLine.classList.add("compass-line");

    return compassLine;
  }
}
