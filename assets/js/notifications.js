// User notifications file
const notifications = document.getElementById("jsNotifications");

// 알림 호출 함수
const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  notifications.appendChild(notification);
};

// 새로 들어온 유저의 닉네임을 호출
export const handleNewUser = ({ nickname }) =>
  fireNotification(`${nickname} just joined!`, "rgb(90, 200, 250)");

export const handleDisconnect = ({ nickname }) =>
  fireNotification(`${nickname} just left!`, "rgb(255, 149, 0)");
