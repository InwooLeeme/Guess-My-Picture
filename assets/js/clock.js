import { getSocket } from "./sockets";
const clockContainer = document.getElementById("jsClock");

const defaultMill = 1000;
const timeLimit = 30000;
let realSec = timeLimit / defaultMill;
let timeRange = null;
//let time;

export const startTimer = () => {
  timeRange = setInterval(function () {
    //time = realSec;
    realSec--;
    clockContainer.innerHTML = `00 : ${
      realSec < 10 ? `0${realSec}` : `${realSec}`
    }
    `;
    if (realSec <= 0) {
      clearInterval(timeRange);
    }
  }, defaultMill);
};

//getSocket().emit(window.events.startTimer, { time: realSec });
export const controlTimer = () => startTimer();
