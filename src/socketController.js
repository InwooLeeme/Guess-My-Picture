// Always listening event in this file.
import events from "./events";
import { chooseWords } from "./words";

let sockets = []; // 유저 닉네임,점수,id를 관리하는 배열
let inProgress = false;
let word = null;
let painter = null;

const chooseLeader = () => sockets[Math.floor(Math.random() * sockets.length)];

const socketController = (socket, io) => {
  // 방금 들어온 사용자를 제외한 모두에게 broadcast를 함.
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  // 모두에게 broadcast를 함.
  const superBroadcast = (event, data) => io.emit(event, data);
  // 중복 제거를 위해 함수화.
  // Server쪽에서 playerUpdate event를 송신. => sockets.js에서 수신
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });

  const startGame = () => {
    if (inProgress === false) {
      inProgress = true;
      painter = chooseLeader();
      word = chooseWords();
      superBroadcast(events.gameStarting);
      setTimeout(() => {
        superBroadcast(events.gameStarted);
        io.to(painter.id).emit(events.painterNotif, { word }); // painter로 지정된 사람에게만 메세지 전송
      }, 3000);
    }
  };

  const endGame = () => {
    inProgress = false;
    superBroadcast(events.gameEnded);
  };
  
  // 점수 측정 함수
  const addPoints = (id) => {
    sockets = sockets.map((socket) => {
      if (socket.id === id) {
        socket.points += 10;
      }
      return socket;
    });
    sendPlayerUpdate();
    endGame();
  }

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    // 닉네임을 설정할 때 sockets배열에 자동으로 닉네임, 점수, id값을 추가
    sockets.push({ id: socket.id, points: 0, nickname: nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
    if (sockets.length === 2) {
      startGame();
    }
  });

  socket.on(events.disconnect, () => {
    // disconnect한 유저를 sockets 배열에서 제거하는 기능
    sockets = sockets.filter((aSocket) => aSocket.id !== socket.id);
    if (sockets.length === 1) {
      endGame();
    } else if (socket.id === painter.id) {
      endGame();
    }
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });

  // sendMsg란 이벤트를 받음
  socket.on(events.sendMsg, ({ message }) => {
    // 메세지 가로채기
    if (message === word) {
      superBroadcast(events.newMsg, {
        message: `Winner is ${socket.nickname}, word was: ${word}`,
        nickname: "Bot",
      });
      addPoints(socket.id); // 점수 부여
    } else {
      //보낸 메세지를 가져와서 broadcast함
      // 정답이 아닌 채팅들만 보여줌
      broadcast(events.newMsg, { message, nickname: socket.nickname });
    }
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
