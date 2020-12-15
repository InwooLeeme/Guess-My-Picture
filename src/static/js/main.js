(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMsg = void 0;

var _sockets = require("./sockets");

// 채팅에 관한 함수를 관리한는 파일
var message = document.getElementById("jsMessage");
var sendMsg = document.getElementById("jsSendMsg"); // 메세지를 form에 보여지게끔 추가하는 함수

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">\n        ").concat(nickname ? nickname : "You:", "</span> ").concat(text, "\n        \n    ");
  message.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMsg = function handleNewMsg(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMsg = handleNewMsg;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZW5kTXNnIiwiYXBwZW5kTXNnIiwidGV4dCIsIm5pY2tuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZW5kTXNnIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZU5ld01zZyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEIsQyxDQUVBOztBQUNBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDNEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEL0MsMEJBRVFBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLE1BRjlCLHFCQUUrQ0QsSUFGL0M7QUFLQUwsRUFBQUEsT0FBTyxDQUFDVSxXQUFSLENBQW9CSCxFQUFwQjtBQUNELENBUkQ7O0FBVUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDL0JBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFGK0IsTUFHdkJDLEtBSHVCLEdBR2JGLEtBSGEsQ0FHdkJFLEtBSHVCO0FBSS9CLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUVILElBQUFBLE9BQU8sRUFBRWdCO0FBQVgsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNELENBUEQ7O0FBU08sSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHcEIsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWU0sUUFBWixRQUFZQSxRQUFaO0FBQUEsU0FDMUJGLFNBQVMsQ0FBQ0osT0FBRCxFQUFVTSxRQUFWLENBRGlCO0FBQUEsQ0FBckI7Ozs7QUFHUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDa0IsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNWLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG4vLyDssYTtjIXsl5Ag6rSA7ZWcIO2VqOyImOulvCDqtIDrpqztlZzripQg7YyM7J28XG5cbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZVwiKTtcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcblxuLy8g66mU7IS47KeA66W8IGZvcm3sl5Ag67O07Jes7KeA6rKM64GUIOy2lOqwgO2VmOuKlCDtlajsiJhcbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSkgPT4ge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPlxuICAgICAgICAke25pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdTpcIn08L3NwYW4+ICR7dGV4dH1cbiAgICAgICAgXG4gICAgYDtcbiAgbWVzc2FnZS5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5jb25zdCBoYW5kbGVTZW5kTXNnID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gc2VuZE1zZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc2VuZE1zZywgeyBtZXNzYWdlOiB2YWx1ZSB9KTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBhcHBlbmRNc2codmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01zZyA9ICh7IG1lc3NhZ2UsIG5pY2tuYW1lIH0pID0+XG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XG5cbmlmIChzZW5kTXNnKSB7XG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcbn1cbiJdfQ==
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login.js");

require("./notifications");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDlkZmQ4OGMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vcGFpbnRcIjtcbiJdfQ==
},{"./chat":1,"./login.js":3,"./notifications":4,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var NICKNAME = "nickname";
var nickname = localStorage.getItem(NICKNAME); // 로그인 기능 함수

var logIn = function logIn(nickname) {
  // socket은 현재 local 변수
  var socket = io("/"); // 연결 => window.socket : 모든 파일에서 socket을 사용 가능

  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(event) {
  event.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsUUFBckIsQ0FBakIsQyxDQUVBOztBQUNBLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNILFFBQUQsRUFBYztBQUMxQjtBQUNBLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakIsQ0FGMEIsQ0FFRjs7QUFDeEJELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQmIsVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTEwsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosU0FBakI7QUFDQUssRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNsQ0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGa0MsTUFHMUJxQixLQUgwQixHQUdoQkQsS0FIZ0IsQ0FHMUJDLEtBSDBCO0FBSWxDRCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0FkLEVBQUFBLFlBQVksQ0FBQ2UsT0FBYixDQUFxQmpCLFFBQXJCLEVBQStCZ0IsS0FBL0I7QUFDQXZCLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ1ksS0FBRCxDQUFMO0FBQ0QsQ0FSRDs7QUFVQSxJQUFJcEIsU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ3NCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRTb2NrZXRzIH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XG5cbi8vIOuhnOq3uOyduCDquLDriqUg7ZWo7IiYXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xuICAvLyBzb2NrZXTsnYAg7ZiE7J6sIGxvY2FsIOuzgOyImFxuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7IC8vIOyXsOqysCA9PiB3aW5kb3cuc29ja2V0IDog66qo65OgIO2MjOydvOyXkOyEnCBzb2NrZXTsnYQg7IKs7JqpIOqwgOuKpVxuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xuICBpbml0U29ja2V0cyhzb2NrZXQpO1xufTtcblxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcbn0gZWxzZSB7XG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICBsb2dJbihuaWNrbmFtZSk7XG59XG5cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgbG9nSW4odmFsdWUpO1xufTtcblxuaWYgKGxvZ2luRm9ybSkge1xuICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cbiJdfQ==
},{"./sockets":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnect = exports.handleNewUser = void 0;
// User notifications file
var body = document.querySelector("body"); // 알림 호출 함수

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
}; // 새로 들어온 유저의 닉네임을 호출


var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined!"), "rgb(90, 200, 250)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnect = function handleDisconnect(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)");
};

exports.handleDisconnect = handleDisconnect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYixDLENBRUE7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDeEMsTUFBTUMsWUFBWSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQUQsRUFBQUEsWUFBWSxDQUFDRSxTQUFiLEdBQXlCSixJQUF6QjtBQUNBRSxFQUFBQSxZQUFZLENBQUNHLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDTCxLQUFyQztBQUNBQyxFQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUIsY0FBekI7QUFDQVgsRUFBQUEsSUFBSSxDQUFDWSxXQUFMLENBQWlCTixZQUFqQjtBQUNELENBTkQsQyxDQVFBOzs7QUFDTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixtQkFBN0IsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQzlCWCxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsa0JBQTNCLENBRGM7QUFBQSxDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFVzZXIgbm90aWZpY2F0aW9ucyBmaWxlXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIOyVjOumvCDtmLjstpwg7ZWo7IiYXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59O1xuXG4vLyDsg4jroZwg65Ok7Ja07JioIOycoOyggOydmCDri4nrhKTsnoTsnYQg7Zi47LacXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7IG5pY2tuYW1lIH0pID0+XG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiKDkwLCAyMDAsIDI1MClcIik7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgMTQ5LCAwKVwiKTtcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

// Painting game page
var canvas = document.getElementById("jsCanvas");
var fillBtn = document.querySelector("#jsMode:nth-child(1)");
var clearBtn = document.querySelector("#jsMode:nth-child(2)");
var colors = document.getElementsByClassName("color");
var ctx = canvas.getContext("2d");
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.lineWidth = 2.5;
var pressed = false;
var filling = false;

function handleMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!pressed) {
    // 켄버스 위에서 마우스가 눌러졌을 때
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // 캔버스 위에서 마우스 클릭을 멈췄을 때
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function startPainting() {
  pressed = true;
}

function stopPainting() {
  pressed = false;
}

function clearCanvas() {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function fillCanvas() {
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function selectColor(event) {
  var targeting = event.target;
  var color = getComputedStyle(targeting);
  var getBackgroundColor = color.backgroundColor;
  ctx.strokeStyle = getBackgroundColor;
  ctx.fillStyle = getBackgroundColor;
}

if (canvas) {
  canvas.addEventListener("mousemove", handleMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  clearBtn.addEventListener("click", clearCanvas);
  fillBtn.addEventListener("click", fillCanvas);
}

Array.from(colors).forEach(function (color) {
  color.addEventListener("click", selectColor);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWxsQnRuIiwicXVlcnlTZWxlY3RvciIsImNsZWFyQnRuIiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImN0eCIsImdldENvbnRleHQiLCJDQU5WQVNfU0laRSIsIndpZHRoIiwiaGVpZ2h0IiwibGluZVdpZHRoIiwicHJlc3NlZCIsImZpbGxpbmciLCJoYW5kbGVNb3ZlIiwiZXZlbnQiLCJ4Iiwib2Zmc2V0WCIsInkiLCJvZmZzZXRZIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic3RhcnRQYWludGluZyIsInN0b3BQYWludGluZyIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0IiwiZmlsbENhbnZhcyIsImZpbGxSZWN0Iiwic2VsZWN0Q29sb3IiLCJ0YXJnZXRpbmciLCJ0YXJnZXQiLCJjb2xvciIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRCYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLHNCQUF2QixDQUFoQjtBQUNBLElBQU1DLFFBQVEsR0FBR0osUUFBUSxDQUFDRyxhQUFULENBQXVCLHNCQUF2QixDQUFqQjtBQUNBLElBQU1FLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxzQkFBVCxDQUFnQyxPQUFoQyxDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHUixNQUFNLENBQUNTLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUVBVixNQUFNLENBQUNXLEtBQVAsR0FBZUQsV0FBZjtBQUNBVixNQUFNLENBQUNZLE1BQVAsR0FBZ0JGLFdBQWhCO0FBQ0FGLEdBQUcsQ0FBQ0ssU0FBSixHQUFnQixHQUFoQjtBQUVBLElBQUlDLE9BQU8sR0FBRyxLQUFkO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEtBQWQ7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDekIsTUFBSUMsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE9BQWQ7QUFDQSxNQUFJQyxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksT0FBZDs7QUFDQSxNQUFJLENBQUNQLE9BQUwsRUFBYztBQUNaO0FBQ0FOLElBQUFBLEdBQUcsQ0FBQ2MsU0FBSjtBQUNBZCxJQUFBQSxHQUFHLENBQUNlLE1BQUosQ0FBV0wsQ0FBWCxFQUFjRSxDQUFkO0FBQ0QsR0FKRCxNQUlPO0FBQ0w7QUFDQVosSUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXTixDQUFYLEVBQWNFLENBQWQ7QUFDQVosSUFBQUEsR0FBRyxDQUFDaUIsTUFBSjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsYUFBVCxHQUF5QjtBQUN2QlosRUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDRDs7QUFDRCxTQUFTYSxZQUFULEdBQXdCO0FBQ3RCYixFQUFBQSxPQUFPLEdBQUcsS0FBVjtBQUNEOztBQUNELFNBQVNjLFdBQVQsR0FBdUI7QUFDckJwQixFQUFBQSxHQUFHLENBQUNxQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQm5CLFdBQXBCLEVBQWlDQSxXQUFqQztBQUNEOztBQUNELFNBQVNvQixVQUFULEdBQXNCO0FBQ3BCdEIsRUFBQUEsR0FBRyxDQUFDdUIsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJyQixXQUFuQixFQUFnQ0EsV0FBaEM7QUFDRDs7QUFFRCxTQUFTc0IsV0FBVCxDQUFxQmYsS0FBckIsRUFBNEI7QUFDMUIsTUFBTWdCLFNBQVMsR0FBR2hCLEtBQUssQ0FBQ2lCLE1BQXhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxnQkFBZ0IsQ0FBQ0gsU0FBRCxDQUE5QjtBQUNBLE1BQU1JLGtCQUFrQixHQUFHRixLQUFLLENBQUNHLGVBQWpDO0FBQ0E5QixFQUFBQSxHQUFHLENBQUMrQixXQUFKLEdBQWtCRixrQkFBbEI7QUFDQTdCLEVBQUFBLEdBQUcsQ0FBQ2dDLFNBQUosR0FBZ0JILGtCQUFoQjtBQUNEOztBQUVELElBQUlyQyxNQUFKLEVBQVk7QUFDVkEsRUFBQUEsTUFBTSxDQUFDeUMsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUN6QixVQUFyQztBQUNBaEIsRUFBQUEsTUFBTSxDQUFDeUMsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNmLGFBQXJDO0FBQ0ExQixFQUFBQSxNQUFNLENBQUN5QyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ2QsWUFBbkM7QUFDQTNCLEVBQUFBLE1BQU0sQ0FBQ3lDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDZCxZQUF0QztBQUNBdEIsRUFBQUEsUUFBUSxDQUFDb0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNiLFdBQW5DO0FBQ0F6QixFQUFBQSxPQUFPLENBQUNzQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQ1gsVUFBbEM7QUFDRDs7QUFFRFksS0FBSyxDQUFDQyxJQUFOLENBQVdyQyxNQUFYLEVBQW1Cc0MsT0FBbkIsQ0FBMkIsVUFBQ1QsS0FBRCxFQUFXO0FBQ3BDQSxFQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDVCxXQUFoQztBQUNELENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWludGluZyBnYW1lIHBhZ2VcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGZpbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzTW9kZTpudGgtY2hpbGQoMSlcIik7XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNNb2RlOm50aC1jaGlsZCgyKVwiKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xvclwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IENBTlZBU19TSVpFID0gNzAwO1xuXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcbmN0eC5saW5lV2lkdGggPSAyLjU7XG5cbmxldCBwcmVzc2VkID0gZmFsc2U7XG5sZXQgZmlsbGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50KSB7XG4gIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICBpZiAoIXByZXNzZWQpIHtcbiAgICAvLyDsvITrsoTsiqQg7JyE7JeQ7IScIOuniOyasOyKpOqwgCDriIzrn6zsoYzsnYQg65WMXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gIH0gZWxzZSB7XG4gICAgLy8g7LqU67KE7IqkIOychOyXkOyEnCDrp4jsmrDsiqQg7YG066at7J2EIOupiOy3hOydhCDrlYxcbiAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKCkge1xuICBwcmVzc2VkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcHJlc3NlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbn1cbmZ1bmN0aW9uIGZpbGxDYW52YXMoKSB7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihldmVudCkge1xuICBjb25zdCB0YXJnZXRpbmcgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRpbmcpO1xuICBjb25zdCBnZXRCYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5iYWNrZ3JvdW5kQ29sb3I7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGdldEJhY2tncm91bmRDb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGdldEJhY2tncm91bmRDb2xvcjtcbn1cblxuaWYgKGNhbnZhcykge1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyQ2FudmFzKTtcbiAgZmlsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsbENhbnZhcyk7XG59XG5cbkFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKChjb2xvcikgPT4ge1xuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0Q29sb3IpO1xufSk7XG4iXX0=
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateScoket = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

// frontend part
// Client part
var socket = null; // 소켓을 가져오는 함수

var getSocket = function getSocket() {
  return socket;
}; // socket 업데이트 함수


exports.getSocket = getSocket;

var updateScoket = function updateScoket(aSocket) {
  return socket = aSocket;
}; // 소켓 사용


exports.updateScoket = updateScoket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateScoket(aSocket); // 새로운 유저가 들어오는 이벤트인 newUser를 항상 듣고있음

  aSocket.on(events.newUser, _notifications.handleNewUser); // 연결이 끝났을때의 이벤트를 항상 듣고 있음

  aSocket.on(events.disconnected, _notifications.handleDisconnect); // newMsg 이벤트를 듣는 중

  aSocket.on(events.newMsg, _chat.handleNewMsg);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU2Nva2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3QiLCJuZXdNc2ciLCJoYW5kbGVOZXdNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFKQTtBQUNBO0FBS0EsSUFBSUEsTUFBTSxHQUFHLElBQWIsQyxDQUVBOztBQUNPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCLEMsQ0FFUDs7Ozs7QUFDTyxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFEO0FBQUEsU0FBY0gsTUFBTSxHQUFHRyxPQUF2QjtBQUFBLENBQXJCLEMsQ0FFUDs7Ozs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRCxPQUFELEVBQWE7QUFBQSxnQkFDbkJFLE1BRG1CO0FBQUEsTUFDOUJDLE1BRDhCLFdBQzlCQSxNQUQ4QjtBQUV0Q0osRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVosQ0FGc0MsQ0FHdEM7O0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQyw0QkFBM0IsRUFKc0MsQ0FLdEM7O0FBQ0FOLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNJLFlBQWxCLEVBQWdDQywrQkFBaEMsRUFOc0MsQ0FPdEM7O0FBQ0FSLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNNLE1BQWxCLEVBQTBCQyxrQkFBMUI7QUFDRCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbnRlbmQgcGFydFxuLy8gQ2xpZW50IHBhcnRcblxuaW1wb3J0IHsgaGFuZGxlTmV3TXNnIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdCwgaGFuZGxlTmV3VXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbi8vIOyGjOy8k+ydhCDqsIDsoLjsmKTripQg7ZWo7IiYXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG4vLyBzb2NrZXQg7JeF642w7J207Yq4IO2VqOyImFxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjb2tldCA9IChhU29ja2V0KSA9PiAoc29ja2V0ID0gYVNvY2tldCk7XG5cbi8vIOyGjOy8kyDsgqzsmqlcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XG4gIHVwZGF0ZVNjb2tldChhU29ja2V0KTtcbiAgLy8g7IOI66Gc7Jq0IOycoOyggOqwgCDrk6TslrTsmKTripQg7J2067Kk7Yq47J24IG5ld1VzZXLrpbwg7ZWt7IOBIOuTo+qzoOyeiOydjFxuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgLy8g7Jew6rKw7J20IOuBneuCrOydhOuVjOydmCDsnbTrsqTtirjrpbwg7ZWt7IOBIOuTo+qzoCDsnojsnYxcbiAgYVNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0KTtcbiAgLy8gbmV3TXNnIOydtOuypO2KuOulvCDrk6PripQg7KSRXG4gIGFTb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TXNnKTtcbn07XG4iXX0=
},{"./chat":1,"./notifications":4}]},{},[2])