import { handleNewUser } from "./notifications";

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
};
