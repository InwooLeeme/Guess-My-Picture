import events from "./events";

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
};

export default socketController;
