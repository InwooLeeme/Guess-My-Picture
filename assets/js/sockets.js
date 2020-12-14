// frontend part
// Client part

import { handleNewMsg } from "./chat";
import { handleDisconnect, handleNewUser } from "./notifications";

let socket = null;

// 소켓을 가져오는 함수
export const getSocket = () => socket;

// socket 업데이트 함수
export const updateScoket = (aSocket) => (socket = aSocket);

// 소켓 사용
export const initSockets = (aSocket) => {
  const { events } = window;
  updateScoket(socket);
  // 새로운 유저가 들어오는 이벤트인 newUser를 항상 듣고있음
  aSocket.on(events.newUser, handleNewUser);
  // 연결이 끝났을때의 이벤트를 항상 듣고 있음
  aSocket.on(events.disconnected, handleDisconnect);
  // newMsg 이벤트를 듣는 중
  aSocket.on(events.newMsg, handleNewMsg);
};
