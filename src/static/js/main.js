(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login.js");

require("./notifications");

require("./sockets");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjIyN2QwMmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW4uanNcIjtcclxuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCBcIi4vc29ja2V0c1wiOyJdfQ==
},{"./login.js":2,"./notifications":3,"./sockets":4}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImluaXRTb2NrZXQiLCJyZXF1aXJlIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIk5JQ0tOQU1FIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9nSW4iLCJzb2NrZXQiLCJpbyIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJzZXROaWNrbmFtZSIsImNsYXNzTmFtZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU07QUFBRUEsRUFBQUE7QUFBRixJQUFpQkMsT0FBTyxDQUFDLFdBQUQsQ0FBOUI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFVBQWxCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILFFBQXJCLENBQWpCLEMsQ0FFQTs7QUFDQSxNQUFNSSxLQUFLLEdBQUlILFFBQUQsSUFBYztBQUMxQjtBQUNBLFFBQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakIsQ0FGMEIsQ0FFRjs7QUFDeEJELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUE7QUFBRixHQUF2QztBQUNBVixFQUFBQSxVQUFVLENBQUNjLE1BQUQsQ0FBVixDQUowQixDQUlOO0FBQ3JCLENBTEQ7O0FBT0EsSUFBSUosUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCUixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCYixVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMTCxFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWixTQUFqQjtBQUNBSyxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNEOztBQUVELE1BQU1XLGdCQUFnQixHQUFJQyxLQUFELElBQVc7QUFDbENBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLFFBQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0EsUUFBTTtBQUFFcUIsSUFBQUE7QUFBRixNQUFZRCxLQUFsQjtBQUNBQSxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0FkLEVBQUFBLFlBQVksQ0FBQ2UsT0FBYixDQUFxQmpCLFFBQXJCLEVBQStCZ0IsS0FBL0I7QUFDQXZCLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ1ksS0FBRCxDQUFMO0FBQ0QsQ0FSRDs7QUFVQSxJQUFJcEIsU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ3NCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgaW5pdFNvY2tldCB9ID0gcmVxdWlyZShcIi4vc29ja2V0c1wiKTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xuXG4vLyDroZzqt7jsnbgg6riw64qlIO2VqOyImFxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcbiAgLy8gc29ja2V07J2AIO2YhOyerCBsb2NhbCDrs4DsiJhcbiAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpOyAvLyDsl7DqsrAgPT4gd2luZG93LnNvY2tldCA6IOuqqOuToCDtjIzsnbzsl5DshJwgc29ja2V07J2EIOyCrOyaqSDqsIDriqVcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcbiAgaW5pdFNvY2tldChzb2NrZXQpOyAvLyDroZzqt7jsnbgg7Iuc7KCQ7JeQIOyGjOy8kyDsi5zsnpFcbn07XG5cbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgbG9nSW4obmlja25hbWUpO1xufVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = void 0;
// User Notifications function page
const notification = document.getElementById("jsNotifications");

const handleNewUser = ({
  nickname
}) => {
  console.log(nickname, "just joined");
};

exports.handleNewUser = handleNewUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXJCOztBQUVPLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUM3Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVosRUFBc0IsYUFBdEI7QUFDRCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVXNlciBOb3RpZmljYXRpb25zIGZ1bmN0aW9uIHBhZ2VcblxuY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmaWNhdGlvbnNcIik7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhuaWNrbmFtZSwgXCJqdXN0IGpvaW5lZFwiKTtcbn07Il19
},{}],4:[function(require,module,exports){
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
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXQiLCJldmVudHMiLCJ3aW5kb3ciLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBREE7QUFHQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxNQUFNQyxTQUFTLEdBQUcsTUFBTUQsTUFBeEI7Ozs7QUFFQSxNQUFNRSxZQUFZLEdBQUlDLE9BQUQsSUFBY0gsTUFBTSxHQUFHRyxPQUE1Qzs7OztBQUVBLE1BQU1DLFVBQVUsR0FBSUQsT0FBRCxJQUFhO0FBQ3JDLFFBQU07QUFBRUUsSUFBQUE7QUFBRixNQUFhQyxNQUFuQixDQURxQyxDQUVyQzs7QUFDQUosRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVosQ0FIcUMsQ0FJckM7O0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRixNQUFNLENBQUNHLE9BQWxCLEVBQTJCQyw0QkFBM0I7QUFDRCxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU29ja2V0IOq0gOumrCDtjpjsnbTsp4BcbmltcG9ydCB7IGhhbmRsZU5ld1VzZXIgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5cbmxldCBzb2NrZXQgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU29ja2V0ID0gKGFTb2NrZXQpID0+IChzb2NrZXQgPSBhU29ja2V0KTtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXQgPSAoYVNvY2tldCkgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdXBkYXRlU29ja2V0KGFTb2NrZXQpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG59O1xuIl19
},{"./notifications":3}]},{},[1])