import events from "./events";

const socketController = (socket) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    broadcast(events.newUser, { nickname }); // 새로 들어온 유저를 제외한 나머지 유저들에게 알려주는 코드
  });
  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });
};

export default socketController;
