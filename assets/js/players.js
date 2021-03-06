// front end part
// player에 관한 페이지

import { disableChat, enableChat } from "./chat";
import { clearTimer, startTimer } from "./clock";
import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

let number;
let randNumber;
const colors = [
  "#1abc9c",
  "#16a085",
  "#f1c40f",
  "#f39c12",
  "#2ecc71",
  "#27ae60",
  "#d35400",
  "#3498db",
  "#2980b9",
  "#e74c3c",
  "#c0392b",
  "#9b59b6",
  "#8e44ad",
  "#ecf0f1",
  "#bdc3c7",
  "#34495e",
  "#2c3e50",
  "#95a5a6",
  "#7f8c8d",
];

const addPlayers = (players) => {
  // 유저가 갱신될 때마다 초기화하고 새로 만들어줌
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname} : ${player.points}`;
    randNumber = genRandom();
    playerElement.style.backgroundColor = colors[randNumber];
    board.appendChild(playerElement);
  });
};

const genRandom = () => {
  number = Math.floor(Math.random() * colors.length);
  return number;
};

const setNotification = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotification("");
  // disable canvas event
  disableCanvas();
  // hidden the canvas controls
  hideControls();
  enableChat();
  startTimer();
};

export const handlePainterNotif = ({ word }) => {
  // able the canvas
  enableCanvas();
  // show the controls
  showControls();
  // chat disable
  disableChat();
  notifs.innerHTML = "";
  notifs.innerText = `You are the painter, paint: ${word}`;
};

export const handleGameEnded = () => {
  setNotification("Game Ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
  clearTimer();
};

export const handleGameStarting = () =>
  setNotification(`Game will start after 3 seconds`);
