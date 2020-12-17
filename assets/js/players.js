// front end part
// player에 관한 페이지

import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  // 유저가 갱신될 때마다 초기화하고 새로 만들어줌
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname} : ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotification = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
}

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotification("");
  // disable canvas event
  disableCanvas();
  // hidden the canvas controls
  hideControls();
};

export const handlePainterNotif = ({ word }) => {
  // able the canvas
  enableCanvas();
  // show the controls
  showControls();
  notifs.innerHTML = "";
  notifs.innerText = `You are the painter, paint: ${word}`;
};

export const handleGameEnded = () => {
  setNotification("Game Ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
}