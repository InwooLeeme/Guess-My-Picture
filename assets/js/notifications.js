// User notifications file
const notifications = document.getElementById("jsNotifications");

// 새로 들어온 유저의 닉네임을 호출
export const handleNewUser = ({ nickname }) => {
  console.log(`${nickname} just joined!`);
};
