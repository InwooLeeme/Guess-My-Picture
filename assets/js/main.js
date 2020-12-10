import { handleMessageNotif } from "./chat";

const socket = io("/");

const sendMessage = (message) => {
  socket.emit("newMessage", { message });
  console.log(`You : ${message}`);
};

function setNickname(nickname) {
  socket.emit("setNickname", { name });
}

socket.on("messageNotif", handleMessageNotif);
