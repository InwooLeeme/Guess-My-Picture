// Timer page
// Front end
const clockContainer = document.getElementById("jsClock");
const defaultMill = 1000;
const timeLimit = 30000;
let realSec = timeLimit / defaultMill;
let timeRange = null;

export const startTimer = () => {
  timeRange = setInterval(function () {
    realSec--;
    clockContainer.innerHTML = `00 : ${
      realSec < 10 ? `0${realSec}` : `${realSec}`
    }`;
    if (realSec <= 0) {
      clearInterval(timeRange);
      resetTimer();
    }
  }, defaultMill);
};

const removeInterval = () => {
  clearInterval(timeRange);
  resetTimer();
};

const resetTimer = () => {
  clockContainer.innerHTML = `00 : ${timeLimit / defaultMill}`;
  realSec = timeLimit / defaultMill;
};

export const controlTimer = () => startTimer();
export const clearTimer = () => removeInterval();
