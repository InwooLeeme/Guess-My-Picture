import events from "./events";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    socket.broadcast.emit(events.newUser, { nickname }); // 새로 들어온 유저를 제외한 나머지 유저들에게 알려주는 코드
  });
};

export default socketController;
