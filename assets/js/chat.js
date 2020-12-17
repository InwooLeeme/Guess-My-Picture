import { getSocket } from "./sockets";
// 채팅에 관한 함수를 관리한는 파일

const message = document.getElementById("jsMessage");
const sendMsg = document.getElementById("jsSendMsg");

// 메세지를 form에 보여지게끔 추가하는 함수
const appendMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">
        ${nickname ? nickname : "You:"}</span> ${text}
        
    `;
  message.appendChild(li);
};

const handleSendMsg = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = "";
  appendMsg(value);
};

export const handleNewMsg = ({ message, nickname }) =>
  appendMsg(message, nickname);

export const disableChat = () => (sendMsg.style.display = "none");
export const enableChat = () => (sendMsg.style.display = "flex");

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
