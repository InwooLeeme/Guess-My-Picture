// front end part
// player에 관한 페이지

import { disableCanvas, hideControls } from "./paint";

const board = document.getElementById("jsPBoard");

const addPlayers = (players) => {
  // 유저가 갱신될 때마다 초기화하고 새로 만들어줌
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname} : ${player.points}`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  // disable canvas event
  disableCanvas();
  // hidden the canvas controls
  hideControls();
  console.log('start!');
}