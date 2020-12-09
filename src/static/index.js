const socket = io("/");

const sendMessage = (message) => {
  socket.emit("newMessage", { message });
  console.log(`You : ${message}`);
};

function setNickname(nickname) {
  socket.emit("setNickname", { name });
}

const handleMessageNotif = (data) => {
  const { message, nickname } = data;
  console.log(`${nickname} : ${message}`);
};

socket.on("messageNotif", handleMessageNotif);
