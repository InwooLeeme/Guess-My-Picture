// Always listening event in this file.
import events from "./events";

let sockets = []; // 유저 닉네임,점수,id를 관리하는 배열

const socketController = (socket, io) => {
  // 방금 들어온 사용자를 제외한 모두에게 broadcast를 함.
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  // 모두에게 broadcast를 함.
  const superBroadcast = (event, data) => io.emit(event, data);
  // 중복 제거를 위해 함수화.
  // Server쪽에서 playerUpdate event를 송신. => sockets.js에서 수신
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    // 닉네임을 설정할 때 sockets배열에 자동으로 닉네임, 점수, id값을 추가
    sockets.push({ id: socket.id, points: 0, nickname: nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
  });
  socket.on(events.disconnect, () => {
    // disconnect한 유저를 sockets 배열에서 제거하는 기능
    sockets = sockets.filter((aSocket) => aSocket.id !== socket.id);
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });

  // sendMsg란 이벤트를 받음
  socket.on(events.sendMsg, ({ message }) => {
    //보낸 메세지를 가져와서 broadcast함
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });
  // beginPath 이벤트 수신
  socket.on(events.beginPath, ({ x, y }) => {
    // 그린 선을 다른 유저에게 broadcast 해줌
    broadcast(events.beganPath, { x, y });
  });
  // strokePath 이벤트 수신
  socket.on(events.strokePath, ({ x, y, color }) => {
    // 그려진 선을 다른 유저들에게 broadcast 해줌
    broadcast(events.strokedPath, { x, y, color });
  });
  // fill event를 수신
  socket.on(events.fill, ({ color }) => {
    // filled 이벤트를 broadcast => sockets.js파일로 송신
    broadcast(events.filled, { color });
  });
  // clear 이벤트 수신
  socket.on(events.clear, () => {
    // cleared event를 송신 (broadcast로)
    broadcast(events.cleared);
  });
};

export default socketController;
