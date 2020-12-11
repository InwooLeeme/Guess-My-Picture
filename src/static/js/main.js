(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// 채팅에 관한 함수 페이지
const messages = document.getElementById("jsMessage");
const sendMsg = document.getElementById("jsSendMsg"); // 메세지 추가 함수

const appendMsg = (text, nickname) => {
  // 메세지를 누가 입력했느냐에 따라서 classname 뒤에 추가가 되는 것이 바뀜.
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="author ${nickname ? "out" : "self"}">${nickname ? nickname : "You"}</span> :${text}
    `;
  messages.appendChild(li);
}; // 메세지 입력 함수


const handleSendMsg = event => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const {
    value
  } = input;
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxNQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCLEMsQ0FFQTs7QUFDQSxNQUFNRSxTQUFTLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEtBQW9CO0FBQ3BDO0FBQ0EsUUFBTUMsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLFNBQUgsR0FBZ0I7QUFDbEIsMEJBQTBCSCxRQUFRLEdBQUcsS0FBSCxHQUFXLE1BQU8sS0FDaERBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBQ3ZCLFlBQVdELElBQUs7QUFDbkIsS0FKRTtBQUtBTCxFQUFBQSxRQUFRLENBQUNVLFdBQVQsQ0FBcUJILEVBQXJCO0FBQ0QsQ0FURCxDLENBV0E7OztBQUNBLE1BQU1JLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQy9CQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBQ0EsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQVlGLEtBQWxCO0FBQ0FBLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQU5EOztBQVFBLElBQUliLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNjLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DTixhQUFuQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8g7LGE7YyF7JeQIOq0gO2VnCDtlajsiJgg7Y6Y7J207KeAXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG4vLyDrqZTshLjsp4Ag7LaU6rCAIO2VqOyImFxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XG4gIC8vIOuplOyEuOyngOulvCDriITqsIAg7J6F66Cl7ZaI64qQ64OQ7JeQIOuUsOudvOyEnCBjbGFzc25hbWUg65Kk7JeQIOy2lOqwgOqwgCDrkJjripQg6rKD7J20IOuwlOuAnC5cbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7XG4gICAgbmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91XCJcbiAgfTwvc3Bhbj4gOiR7dGV4dH1cbiAgICBgO1xuICBtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG4vLyDrqZTshLjsp4Ag7J6F66ClIO2VqOyImFxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBhcHBlbmRNc2codmFsdWUpO1xufTtcblxuaWYgKHNlbmRNc2cpIHtcbiAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xufVxuIl19
},{}],2:[function(require,module,exports){
"use strict";

require("./login.js");

require("./notifications.js");

require("./sockets");

require("./chat");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNGRlMDg5MDMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW4uanNcIjtcbmltcG9ydCBcIi4vbm90aWZpY2F0aW9ucy5qc1wiO1xuaW1wb3J0IFwiLi9zb2NrZXRzXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbiJdfQ==
},{"./chat":1,"./login.js":3,"./notifications.js":4,"./sockets":5}],3:[function(require,module,exports){
"use strict";

const {
  initSocket
} = require("./sockets");

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const NICKNAME = "nickname";
const nickname = localStorage.getItem(NICKNAME); // 로그인 기능 함수

const logIn = nickname => {
  // socket은 현재 local 변수
  // eslint-disable-next-line no-undef
  const socket = io("/"); // 연결 => window.socket : 모든 파일에서 socket을 사용 가능

  socket.emit(window.events.setNickname, {
    nickname
  });
  initSocket(socket); // 로그인 시점에 소켓 시작
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = event => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const {
    value
  } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImluaXRTb2NrZXQiLCJyZXF1aXJlIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIk5JQ0tOQU1FIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9nSW4iLCJzb2NrZXQiLCJpbyIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJzZXROaWNrbmFtZSIsImNsYXNzTmFtZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU07QUFBRUEsRUFBQUE7QUFBRixJQUFpQkMsT0FBTyxDQUFDLFdBQUQsQ0FBOUI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILFFBQXJCLENBQWpCLEMsQ0FFQTs7QUFDQSxNQUFNSSxLQUFLLEdBQUlILFFBQUQsSUFBYztBQUMxQjtBQUNBO0FBQ0EsUUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQixDQUgwQixDQUdGOztBQUN4QkQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztBQUFFVCxJQUFBQTtBQUFGLEdBQXZDO0FBQ0FWLEVBQUFBLFVBQVUsQ0FBQ2MsTUFBRCxDQUFWLENBTDBCLENBS047QUFDckIsQ0FORDs7QUFRQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJiLFVBQWpCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xMLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsTUFBTVcsZ0JBQWdCLEdBQUlDLEtBQUQsSUFBVztBQUNsQ0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFDQSxRQUFNO0FBQUVxQixJQUFBQTtBQUFGLE1BQVlELEtBQWxCO0FBQ0FBLEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQWQsRUFBQUEsWUFBWSxDQUFDZSxPQUFiLENBQXFCakIsUUFBckIsRUFBK0JnQixLQUEvQjtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosU0FBakI7QUFDQUssRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDRCxDQVJEOztBQVVBLElBQUlwQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDc0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbml0U29ja2V0IH0gPSByZXF1aXJlKFwiLi9zb2NrZXRzXCIpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XG5cbi8vIOuhnOq3uOyduCDquLDriqUg7ZWo7IiYXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xuICAvLyBzb2NrZXTsnYAg7ZiE7J6sIGxvY2FsIOuzgOyImFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpOyAvLyDsl7DqsrAgPT4gd2luZG93LnNvY2tldCA6IOuqqOuToCDtjIzsnbzsl5DshJwgc29ja2V07J2EIOyCrOyaqSDqsIDriqVcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcbiAgaW5pdFNvY2tldChzb2NrZXQpOyAvLyDroZzqt7jsnbgg7Iuc7KCQ7JeQIOyGjOy8kyDsi5zsnpFcbn07XG5cbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgbG9nSW4obmlja25hbWUpO1xufVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
// User Notifications function page
const body = document.getElementById("body"); // connection

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

const handleNewUser = ({
  nickname
}) => fireNotification(`${nickname} just joined!`, "rgb(0, 122, 255)");

exports.handleNewUser = handleNewUser;

const handleDisconnected = ({
  nickname
}) => fireNotification(`${nickname} just left!`, "rgb(255, 59, 48)");

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaXJlTm90aWZpY2F0aW9uIiwidGV4dCIsImNvbG9yIiwibm90aWZpY2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVOZXdVc2VyIiwibmlja25hbWUiLCJoYW5kbGVEaXNjb25uZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYixDLENBRUE7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQ3hDLFFBQU1DLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FYLEVBQUFBLElBQUksQ0FBQ1ksV0FBTCxDQUFpQk4sWUFBakI7QUFDRCxDQU5EOztBQVFPLE1BQU1PLGFBQWEsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUMzQlgsZ0JBQWdCLENBQUUsR0FBRVcsUUFBUyxlQUFiLEVBQTZCLGtCQUE3QixDQURYOzs7O0FBR0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQztBQUFFRCxFQUFBQTtBQUFGLENBQUQsS0FDaENYLGdCQUFnQixDQUFFLEdBQUVXLFFBQVMsYUFBYixFQUEyQixrQkFBM0IsQ0FEWCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFVzZXIgTm90aWZpY2F0aW9ucyBmdW5jdGlvbiBwYWdlXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5cbi8vIGNvbm5lY3Rpb25cbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdGVkID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgNTksIDQ4KVwiKTtcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

// Socket 관리 페이지
let socket = null;

const getSocket = () => socket;

exports.getSocket = getSocket;

const updateSocket = aSocket => socket = aSocket;

exports.updateSocket = updateSocket;

const initSocket = aSocket => {
  const {
    events
  } = window; // eslint-disable-next-line no-undef

  updateSocket(aSocket); // eslint-disable-next-line no-undef

  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXQiLCJldmVudHMiLCJ3aW5kb3ciLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIiwiZGlzY29ubmVjdGVkIiwiaGFuZGxlRGlzY29ubmVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBREE7QUFHQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxNQUFNQyxTQUFTLEdBQUcsTUFBTUQsTUFBeEI7Ozs7QUFFQSxNQUFNRSxZQUFZLEdBQUlDLE9BQUQsSUFBY0gsTUFBTSxHQUFHRyxPQUE1Qzs7OztBQUVBLE1BQU1DLFVBQVUsR0FBSUQsT0FBRCxJQUFhO0FBQ3JDLFFBQU07QUFBRUUsSUFBQUE7QUFBRixNQUFhQyxNQUFuQixDQURxQyxDQUVyQzs7QUFDQUosRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVosQ0FIcUMsQ0FJckM7O0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRixNQUFNLENBQUNHLE9BQWxCLEVBQTJCQyw0QkFBM0I7QUFDQU4sRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdGLE1BQU0sQ0FBQ0ssWUFBbEIsRUFBZ0NDLGlDQUFoQztBQUNELENBUE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTb2NrZXQg6rSA66asIO2OmOydtOyngFxuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdGVkLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNvY2tldCA9IChhU29ja2V0KSA9PiAoc29ja2V0ID0gYVNvY2tldCk7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0ID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHVwZGF0ZVNvY2tldChhU29ja2V0KTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGFTb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld1VzZXIpO1xuICBhU29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZClcbn07XG4iXX0=
},{"./notifications":4}]},{},[2])