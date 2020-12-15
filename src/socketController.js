import events from "./events";

// Always listening event in this file.

const socketController = (socket) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname });
  });
  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
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
  socket.on(events.strokePath, ({ x, y }) => {
    // 그려진 선을 다른 유저들에게 broadcast 해줌
    broadcast(events.strokedPath, { x, y });
  });
};

export default socketController;
