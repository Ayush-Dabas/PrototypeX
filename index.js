function submitClick() {
  console.log(meditationTime);
}

function calcMeditationXP() {
  let meditationTime = document.getElementById("meditation").value;
  let xpFromMeditation = 0;
  if (meditationTime < 6 && meditationTime > 0) {
    xpFromMeditation = 1;
  } else if (meditationTime >= 6 && meditationTime < 12) {
    xpFromMeditation = 3;
  } else if (meditationTime >= 12 && meditationTime < 18) {
    xpFromMeditation = 5;
  } else if (meditationTime >= 18 && meditationTime < 24) {
    xpFromMeditation = 7;
  } else if (meditationTime >= 24 && meditationTime < 30) {
    xpFromMeditation = 9;
  } else if (meditationTime >= 30 && meditationTime < 34) {
    xpFromMeditation = 15;
  } else {
    xpFromMeditation = 15 + meditationTime / 2;
  }

  return xpFromMeditation;
}

function calcTotal() {
  let xp1 = calcMeditationXP();
  document.getElementById("result").innerHTML += xp1;
}
