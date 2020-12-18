// frontend part
// Client part

import { handleNewMsg } from "./chat";
import { controlTimer } from "./clock";
import { handleDisconnect, handleNewUser } from "./notifications";
import {
  handleBeganPath,
  handleClear,
  handleFilled,
  handleStrokedPath,
} from "./paint";
import {
  handleGameEnded,
  handleGameStarted,
  handleGameStarting,
  handlePainterNotif,
  handlePlayerUpdate,
} from "./players";

let socket = null;

// 소켓을 가져오는 함수
export const getSocket = () => socket;

// socket 업데이트 함수
export const updateScoket = (aSocket) => (socket = aSocket);

// 소켓 사용
export const initSockets = (aSocket) => {
  const { events } = window;
  updateScoket(aSocket);
  // 새로운 유저가 들어오는 이벤트인 newUser를 항상 듣고있음
  aSocket.on(events.newUser, handleNewUser);
  // 연결이 끝났을때의 이벤트를 항상 듣고 있음
  aSocket.on(events.disconnected, handleDisconnect);
  // newMsg 이벤트를 듣는 중
  aSocket.on(events.newMsg, handleNewMsg);
  // beganPath 이벤트 수신
  aSocket.on(events.beganPath, handleBeganPath);
  // strokedPath 이벤트 수신
  aSocket.on(events.strokedPath, handleStrokedPath);
  // filled event 수신
  aSocket.on(events.filled, handleFilled);
  // cleared event 수신 => handleClear 호출
  aSocket.on(events.cleared, handleClear);
  // playerUpdate event를 수신 => handlePlayerUpdate 호출
  aSocket.on(events.playerUpdate, handlePlayerUpdate);
  // gameStarted event를 수신 => handleGameStarted를 호출
  aSocket.on(events.gameStarted, handleGameStarted);
  // painterNotif event를 수신 => handlePainterNotif릃 호출
  aSocket.on(events.painterNotif, handlePainterNotif);
  // gameEnded event를 수신 => handleGameEnded 호출
  aSocket.on(events.gameEnded, handleGameEnded);
  //
  aSocket.on(events.gameStarting, handleGameStarting);
};
