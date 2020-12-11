// 채팅에 관한 함수 페이지
const messages = document.getElementById("jsMessage");
const sendMsg = document.getElementById("jsSendMsg");

// 메세지 추가 함수
const appendMsg = (text, nickname) => {
  // 메세지를 누가 입력했느냐에 따라서 classname 뒤에 추가가 되는 것이 바뀜.
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  }</span> :${text}
    `;
  messages.appendChild(li);
};

// 메세지 입력 함수
const handleSendMsg = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
