(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableChat = exports.disableChat = exports.handleNewMsg = void 0;

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

var disableChat = function disableChat() {
  return sendMsg.style.display = "none";
};

exports.disableChat = disableChat;

var enableChat = function enableChat() {
  return sendMsg.style.display = "flex";
};

exports.enableChat = enableChat;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZW5kTXNnIiwiYXBwZW5kTXNnIiwidGV4dCIsIm5pY2tuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZW5kTXNnIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZU5ld01zZyIsImRpc2FibGVDaGF0Iiwic3R5bGUiLCJkaXNwbGF5IiwiZW5hYmxlQ2hhdCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEIsQyxDQUVBOztBQUNBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDNEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEL0MsMEJBRVFBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLE1BRjlCLHFCQUUrQ0QsSUFGL0M7QUFLQUwsRUFBQUEsT0FBTyxDQUFDVSxXQUFSLENBQW9CSCxFQUFwQjtBQUNELENBUkQ7O0FBVUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDL0JBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFGK0IsTUFHdkJDLEtBSHVCLEdBR2JGLEtBSGEsQ0FHdkJFLEtBSHVCO0FBSS9CLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUVILElBQUFBLE9BQU8sRUFBRWdCO0FBQVgsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNELENBUEQ7O0FBU08sSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFHcEIsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWU0sUUFBWixRQUFZQSxRQUFaO0FBQUEsU0FDMUJGLFNBQVMsQ0FBQ0osT0FBRCxFQUFVTSxRQUFWLENBRGlCO0FBQUEsQ0FBckI7Ozs7QUFHQSxJQUFNZSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQU9sQixPQUFPLENBQUNtQixLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBL0I7QUFBQSxDQUFwQjs7OztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBT3JCLE9BQU8sQ0FBQ21CLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUEvQjtBQUFBLENBQW5COzs7O0FBRVAsSUFBSXBCLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNzQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ2QsYUFBbkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcbi8vIOyxhO2MheyXkCDqtIDtlZwg7ZWo7IiY66W8IOq0gOumrO2VnOuKlCDtjIzsnbxcblxuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG4vLyDrqZTshLjsp4DrpbwgZm9ybeyXkCDrs7Tsl6zsp4DqsozrgZQg7LaU6rCA7ZWY64qUIO2VqOyImFxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+XG4gICAgICAgICR7bmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91OlwifTwvc3Bhbj4gJHt0ZXh0fVxuICAgICAgICBcbiAgICBgO1xuICBtZXNzYWdlLmFwcGVuZENoaWxkKGxpKTtcbn07XG5cbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TXNnID0gKHsgbWVzc2FnZSwgbmlja25hbWUgfSkgPT5cbiAgYXBwZW5kTXNnKG1lc3NhZ2UsIG5pY2tuYW1lKTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVDaGF0ID0gKCkgPT4gKHNlbmRNc2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKTtcbmV4cG9ydCBjb25zdCBlbmFibGVDaGF0ID0gKCkgPT4gKHNlbmRNc2cuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiKTtcblxuaWYgKHNlbmRNc2cpIHtcbiAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xufVxuIl19
},{"./sockets":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearTimer = exports.controlTimer = exports.startTimer = void 0;
// Timer page
// Front end
var clockContainer = document.getElementById("jsClock");
var defaultMill = 1000;
var timeLimit = 30000;
var realSec = timeLimit / defaultMill;
var timeRange = null;

var startTimer = function startTimer() {
  timeRange = setInterval(function () {
    realSec--;
    clockContainer.innerHTML = "00 : ".concat(realSec < 10 ? "0".concat(realSec) : "".concat(realSec));

    if (realSec <= 0) {
      clearInterval(timeRange);
      resetTimer();
    }
  }, defaultMill);
};

exports.startTimer = startTimer;

var removeInterval = function removeInterval() {
  clearInterval(timeRange);
  resetTimer();
};

var resetTimer = function resetTimer() {
  clockContainer.innerHTML = "00 : ".concat(timeLimit / defaultMill);
  realSec = timeLimit / defaultMill;
};

var controlTimer = function controlTimer() {
  return startTimer();
};

exports.controlTimer = controlTimer;

var clearTimer = function clearTimer() {
  return removeInterval();
};

exports.clearTimer = clearTimer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NrLmpzIl0sIm5hbWVzIjpbImNsb2NrQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRlZmF1bHRNaWxsIiwidGltZUxpbWl0IiwicmVhbFNlYyIsInRpbWVSYW5nZSIsInN0YXJ0VGltZXIiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImNsZWFySW50ZXJ2YWwiLCJyZXNldFRpbWVyIiwicmVtb3ZlSW50ZXJ2YWwiLCJjb250cm9sVGltZXIiLCJjbGVhclRpbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBdkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBcEI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsS0FBbEI7QUFDQSxJQUFJQyxPQUFPLEdBQUdELFNBQVMsR0FBR0QsV0FBMUI7QUFDQSxJQUFJRyxTQUFTLEdBQUcsSUFBaEI7O0FBRU8sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QkQsRUFBQUEsU0FBUyxHQUFHRSxXQUFXLENBQUMsWUFBWTtBQUNsQ0gsSUFBQUEsT0FBTztBQUNQTCxJQUFBQSxjQUFjLENBQUNTLFNBQWYsa0JBQ0VKLE9BQU8sR0FBRyxFQUFWLGNBQW1CQSxPQUFuQixjQUFrQ0EsT0FBbEMsQ0FERjs7QUFHQSxRQUFJQSxPQUFPLElBQUksQ0FBZixFQUFrQjtBQUNoQkssTUFBQUEsYUFBYSxDQUFDSixTQUFELENBQWI7QUFDQUssTUFBQUEsVUFBVTtBQUNYO0FBQ0YsR0FUc0IsRUFTcEJSLFdBVG9CLENBQXZCO0FBVUQsQ0FYTTs7OztBQWFQLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQkYsRUFBQUEsYUFBYSxDQUFDSixTQUFELENBQWI7QUFDQUssRUFBQUEsVUFBVTtBQUNYLENBSEQ7O0FBS0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QlgsRUFBQUEsY0FBYyxDQUFDUyxTQUFmLGtCQUFtQ0wsU0FBUyxHQUFHRCxXQUEvQztBQUNBRSxFQUFBQSxPQUFPLEdBQUdELFNBQVMsR0FBR0QsV0FBdEI7QUFDRCxDQUhEOztBQUtPLElBQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTU4sVUFBVSxFQUFoQjtBQUFBLENBQXJCOzs7O0FBQ0EsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNRixjQUFjLEVBQXBCO0FBQUEsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaW1lciBwYWdlXG4vLyBGcm9udCBlbmRcbmNvbnN0IGNsb2NrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0Nsb2NrXCIpO1xuY29uc3QgZGVmYXVsdE1pbGwgPSAxMDAwO1xuY29uc3QgdGltZUxpbWl0ID0gMzAwMDA7XG5sZXQgcmVhbFNlYyA9IHRpbWVMaW1pdCAvIGRlZmF1bHRNaWxsO1xubGV0IHRpbWVSYW5nZSA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBzdGFydFRpbWVyID0gKCkgPT4ge1xuICB0aW1lUmFuZ2UgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgcmVhbFNlYy0tO1xuICAgIGNsb2NrQ29udGFpbmVyLmlubmVySFRNTCA9IGAwMCA6ICR7XG4gICAgICByZWFsU2VjIDwgMTAgPyBgMCR7cmVhbFNlY31gIDogYCR7cmVhbFNlY31gXG4gICAgfWA7XG4gICAgaWYgKHJlYWxTZWMgPD0gMCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lUmFuZ2UpO1xuICAgICAgcmVzZXRUaW1lcigpO1xuICAgIH1cbiAgfSwgZGVmYXVsdE1pbGwpO1xufTtcblxuY29uc3QgcmVtb3ZlSW50ZXJ2YWwgPSAoKSA9PiB7XG4gIGNsZWFySW50ZXJ2YWwodGltZVJhbmdlKTtcbiAgcmVzZXRUaW1lcigpO1xufTtcblxuY29uc3QgcmVzZXRUaW1lciA9ICgpID0+IHtcbiAgY2xvY2tDb250YWluZXIuaW5uZXJIVE1MID0gYDAwIDogJHt0aW1lTGltaXQgLyBkZWZhdWx0TWlsbH1gO1xuICByZWFsU2VjID0gdGltZUxpbWl0IC8gZGVmYXVsdE1pbGw7XG59O1xuXG5leHBvcnQgY29uc3QgY29udHJvbFRpbWVyID0gKCkgPT4gc3RhcnRUaW1lcigpO1xuZXhwb3J0IGNvbnN0IGNsZWFyVGltZXIgPSAoKSA9PiByZW1vdmVJbnRlcnZhbCgpO1xuIl19
},{}],3:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login.js");

require("./notifications");

require("./chat");

require("./paint");

require("./players");

require("./clock");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzhkZjQ5ZjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vcGFpbnRcIjtcbmltcG9ydCBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IFwiLi9jbG9ja1wiO1xuIl19
},{"./chat":1,"./clock":2,"./login.js":4,"./notifications":5,"./paint":6,"./players":7,"./sockets":8}],4:[function(require,module,exports){
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
},{"./sockets":8}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCanvas = exports.showControls = exports.hideControls = exports.enableCanvas = exports.disableCanvas = exports.handleClear = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

// Painting game page
// Front end
var canvas = document.getElementById("jsCanvas");
var controls = document.getElementById("jsControls");
var selectColors = document.getElementById("jsColors");
var fillBtn = document.querySelector("#jsMode:nth-child(1)");
var clearBtn = document.querySelector("#jsMode:nth-child(2)");
var colors = document.getElementsByClassName("color");
var ctx = canvas.getContext("2d");
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.lineWidth = 2.5;
var pressed = false; // 다른 함수에도 사용하기 위해서 함수화 하였음 (beginPath and strokedPath)

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

var clearCanvas = function clearCanvas() {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

function handleMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!pressed) {
    // 켄버스 위에서 마우스가 눌러졌을 때
    beginPath(x, y); // 실시간으로 beginPath 이벤트 발생

    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    // 캔버스 위에서 마우스 클릭을 멈췄을 때
    strokePath(x, y); // 실시간으로 strokePath 이벤트 발생
    // color를 보내줌으로써 그리고 있는 색상 정보까지 포함

    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
}

function startPainting() {
  pressed = true;
}

function stopPainting() {
  pressed = false;
}

function clearTheCanvas() {
  clearCanvas(); // clear event 송신 => socketController.js 에서 수신

  (0, _sockets.getSocket)().emit(window.events.clear);
}

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
}; // canvas 채우기


function fillCanvas() {
  fill(); // fill 이벤트 송신

  (0, _sockets.getSocket)().emit(window.events.fill, {
    color: ctx.fillStyle
  });
}

function selectColor(event) {
  var targeting = event.target;
  var color = getComputedStyle(targeting);
  var getBackgroundColor = color.backgroundColor;
  ctx.strokeStyle = getBackgroundColor;
  ctx.fillStyle = getBackgroundColor;
}

Array.from(colors).forEach(function (color) {
  color.addEventListener("click", selectColor);
});

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;

var handleClear = function handleClear() {
  return clearCanvas();
};

exports.handleClear = handleClear;

var disableCanvas = function disableCanvas() {
  canvas.removeEventListener("mousemove", handleMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  clearBtn.removeEventListener("click", clearTheCanvas);
  fillBtn.removeEventListener("click", fillCanvas);
};

exports.disableCanvas = disableCanvas;

var enableCanvas = function enableCanvas() {
  canvas.addEventListener("mousemove", handleMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  clearBtn.addEventListener("click", clearTheCanvas);
  fillBtn.addEventListener("click", fillCanvas);
};

exports.enableCanvas = enableCanvas;

var hideControls = function hideControls() {
  controls.style.display = "none";
  selectColors.style.display = "none";
};

exports.hideControls = hideControls;

var showControls = function showControls() {
  controls.style.display = "flex";
  selectColors.style.display = "flex";
};

exports.showControls = showControls;

var resetCanvas = function resetCanvas() {
  return fill("#fff");
};

exports.resetCanvas = resetCanvas;

if (canvas) {
  // default
  hideControls();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cm9scyIsInNlbGVjdENvbG9ycyIsImZpbGxCdG4iLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJCdG4iLCJjb2xvcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkNBTlZBU19TSVpFIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lV2lkdGgiLCJwcmVzc2VkIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwiY29sb3IiLCJjdXJyZW50Q29sb3IiLCJzdHJva2VTdHlsZSIsImxpbmVUbyIsInN0cm9rZSIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0IiwiaGFuZGxlTW92ZSIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic3RhcnRQYWludGluZyIsInN0b3BQYWludGluZyIsImNsZWFyVGhlQ2FudmFzIiwiY2xlYXIiLCJmaWxsIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmaWxsQ2FudmFzIiwic2VsZWN0Q29sb3IiLCJ0YXJnZXRpbmciLCJ0YXJnZXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0QmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVCZWdhblBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCIsImhhbmRsZUZpbGxlZCIsImhhbmRsZUNsZWFyIiwiZGlzYWJsZUNhbnZhcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGVDYW52YXMiLCJoaWRlQ29udHJvbHMiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG93Q29udHJvbHMiLCJyZXNldENhbnZhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUZBO0FBQ0E7QUFFQSxJ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QU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTXpCLElBQUksQ0FBQyxNQUFELENBQVY7QUFBQSxDQUFwQjs7OztBQUVQLElBQUl4QyxNQUFKLEVBQVk7QUFDVjtBQUNBNkQsRUFBQUEsWUFBWTtBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFpbnRpbmcgZ2FtZSBwYWdlXG4vLyBGcm9udCBlbmRcbmltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDb250cm9sc1wiKTtcbmNvbnN0IHNlbGVjdENvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDb2xvcnNcIik7XG5jb25zdCBmaWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc01vZGU6bnRoLWNoaWxkKDEpXCIpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzTW9kZTpudGgtY2hpbGQoMilcIik7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29sb3JcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCBDQU5WQVNfU0laRSA9IDcwMDtcblxuY2FudmFzLndpZHRoID0gQ0FOVkFTX1NJWkU7XG5jYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX1NJWkU7XG5jdHgubGluZVdpZHRoID0gMi41O1xuXG5sZXQgcHJlc3NlZCA9IGZhbHNlO1xuXG4vLyDri6Trpbgg7ZWo7IiY7JeQ64+EIOyCrOyaqe2VmOq4sCDsnITtlbTshJwg7ZWo7IiY7ZmUIO2VmOyYgOydjCAoYmVnaW5QYXRoIGFuZCBzdHJva2VkUGF0aClcbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh4LCB5KTtcbn07XG5cbmNvbnN0IHN0cm9rZVBhdGggPSAoeCwgeSwgY29sb3IgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICB9XG4gIGN0eC5saW5lVG8oeCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xufTtcblxuY29uc3QgY2xlYXJDYW52YXMgPSAoKSA9PiB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgbGV0IHggPSBldmVudC5vZmZzZXRYO1xuICBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gIGlmICghcHJlc3NlZCkge1xuICAgIC8vIOy8hOuyhOyKpCDsnITsl5DshJwg66eI7Jqw7Iqk6rCAIOuIjOufrOyhjOydhCDrlYxcbiAgICBiZWdpblBhdGgoeCwgeSk7XG4gICAgLy8g7Iuk7Iuc6rCE7Jy866GcIGJlZ2luUGF0aCDsnbTrsqTtirgg67Cc7IOdXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5IH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIOy6lOuyhOyKpCDsnITsl5DshJwg66eI7Jqw7IqkIO2BtOumreydhCDrqYjst4TsnYQg65WMXG4gICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICAvLyDsi6Tsi5zqsITsnLzroZwgc3Ryb2tlUGF0aCDsnbTrsqTtirgg67Cc7IOdXG4gICAgLy8gY29sb3Lrpbwg67O064K07KSM7Jy866Gc7I2oIOq3uOumrOqzoCDsnojripQg7IOJ7IOBIOygleuztOq5jOyngCDtj6ztlahcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICBjb2xvcjogY3R4LnN0cm9rZVN0eWxlLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0UGFpbnRpbmcoKSB7XG4gIHByZXNzZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gc3RvcFBhaW50aW5nKCkge1xuICBwcmVzc2VkID0gZmFsc2U7XG59XG5mdW5jdGlvbiBjbGVhclRoZUNhbnZhcygpIHtcbiAgY2xlYXJDYW52YXMoKTtcbiAgLy8gY2xlYXIgZXZlbnQg7Iah7IugID0+IHNvY2tldENvbnRyb2xsZXIuanMg7JeQ7IScIOyImOyLoFxuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuY2xlYXIpO1xufVxuXG5jb25zdCBmaWxsID0gKGNvbG9yID0gbnVsbCkgPT4ge1xuICBsZXQgY3VycmVudENvbG9yID0gY3R4LmZpbGxTdHlsZTtcbiAgaWYgKGNvbG9yICE9PSBudWxsKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB9XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xuICBjdHguZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xufTtcblxuLy8gY2FudmFzIOyxhOyasOq4sFxuZnVuY3Rpb24gZmlsbENhbnZhcygpIHtcbiAgZmlsbCgpO1xuICAvLyBmaWxsIOydtOuypO2KuCDshqHsi6BcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmZpbGwsIHsgY29sb3I6IGN0eC5maWxsU3R5bGUgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldGluZyA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgY29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldGluZyk7XG4gIGNvbnN0IGdldEJhY2tncm91bmRDb2xvciA9IGNvbG9yLmJhY2tncm91bmRDb2xvcjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gZ2V0QmFja2dyb3VuZENvbG9yO1xuICBjdHguZmlsbFN0eWxlID0gZ2V0QmFja2dyb3VuZENvbG9yO1xufVxuXG5BcnJheS5mcm9tKGNvbG9ycykuZm9yRWFjaCgoY29sb3IpID0+IHtcbiAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdENvbG9yKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQmVnYW5QYXRoID0gKHsgeCwgeSB9KSA9PiBiZWdpblBhdGgoeCwgeSk7XG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5LCBjb2xvciB9KSA9PiBzdHJva2VQYXRoKHgsIHksIGNvbG9yKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxsZWQgPSAoeyBjb2xvciB9KSA9PiBmaWxsKGNvbG9yKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IGNsZWFyQ2FudmFzKCk7XG5leHBvcnQgY29uc3QgZGlzYWJsZUNhbnZhcyA9ICgpID0+IHtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW92ZSk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNsZWFyQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclRoZUNhbnZhcyk7XG4gIGZpbGxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbGxDYW52YXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZUNhbnZhcyA9ICgpID0+IHtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW92ZSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XG4gIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhclRoZUNhbnZhcyk7XG4gIGZpbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbGxDYW52YXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhpZGVDb250cm9scyA9ICgpID0+IHtcbiAgY29udHJvbHMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBzZWxlY3RDb2xvcnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcbmV4cG9ydCBjb25zdCBzaG93Q29udHJvbHMgPSAoKSA9PiB7XG4gIGNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgc2VsZWN0Q29sb3JzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldENhbnZhcyA9ICgpID0+IGZpbGwoXCIjZmZmXCIpO1xuXG5pZiAoY2FudmFzKSB7XG4gIC8vIGRlZmF1bHRcbiAgaGlkZUNvbnRyb2xzKCk7XG59XG4iXX0=
},{"./sockets":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGameStarting = exports.handleGameEnded = exports.handlePainterNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _chat = require("./chat");

var _clock = require("./clock");

var _paint = require("./paint");

// front end part
// player에 관한 페이지
var board = document.getElementById("jsPBoard");
var notifs = document.getElementById("jsNotifs");
var number;
var randNumber;
var colors = ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", "#27ae60", "#d35400", "#3498db", "#2980b9", "#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#ecf0f1", "#bdc3c7", "#34495e", "#2c3e50", "#95a5a6", "#7f8c8d"];

var addPlayers = function addPlayers(players) {
  // 유저가 갱신될 때마다 초기화하고 새로 만들어줌
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, " : ").concat(player.points);
    randNumber = genRandom();
    playerElement.style.backgroundColor = colors[randNumber];
    board.appendChild(playerElement);
  });
};

var genRandom = function genRandom() {
  number = Math.floor(Math.random() * colors.length);
  return number;
};

var setNotification = function setNotification(text) {
  notifs.innerText = "";
  notifs.innerText = text;
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  setNotification(""); // disable canvas event

  (0, _paint.disableCanvas)(); // hidden the canvas controls

  (0, _paint.hideControls)();
  (0, _chat.enableChat)();
  (0, _clock.startTimer)();
};

exports.handleGameStarted = handleGameStarted;

var handlePainterNotif = function handlePainterNotif(_ref2) {
  var word = _ref2.word;
  // able the canvas
  (0, _paint.enableCanvas)(); // show the controls

  (0, _paint.showControls)(); // chat disable

  (0, _chat.disableChat)();
  notifs.innerHTML = "";
  notifs.innerText = "You are the painter, paint: ".concat(word);
};

exports.handlePainterNotif = handlePainterNotif;

var handleGameEnded = function handleGameEnded() {
  setNotification("Game Ended.");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
  (0, _paint.resetCanvas)();
  (0, _clock.clearTimer)();
};

exports.handleGameEnded = handleGameEnded;

var handleGameStarting = function handleGameStarting() {
  return setNotification("Game will start after 3 seconds");
};

exports.handleGameStarting = handleGameStarting;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwibnVtYmVyIiwicmFuZE51bWJlciIsImNvbG9ycyIsImFkZFBsYXllcnMiLCJwbGF5ZXJzIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInBsYXllciIsInBsYXllckVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwibmlja25hbWUiLCJwb2ludHMiLCJnZW5SYW5kb20iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFwcGVuZENoaWxkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic2V0Tm90aWZpY2F0aW9uIiwidGV4dCIsImhhbmRsZVBsYXllclVwZGF0ZSIsInNvY2tldHMiLCJoYW5kbGVHYW1lU3RhcnRlZCIsImhhbmRsZVBhaW50ZXJOb3RpZiIsIndvcmQiLCJoYW5kbGVHYW1lRW5kZWQiLCJoYW5kbGVHYW1lU3RhcnRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFDQTs7QUFMQTtBQUNBO0FBWUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFFQSxJQUFJRSxNQUFKO0FBQ0EsSUFBSUMsVUFBSjtBQUNBLElBQU1DLE1BQU0sR0FBRyxDQUNiLFNBRGEsRUFFYixTQUZhLEVBR2IsU0FIYSxFQUliLFNBSmEsRUFLYixTQUxhLEVBTWIsU0FOYSxFQU9iLFNBUGEsRUFRYixTQVJhLEVBU2IsU0FUYSxFQVViLFNBVmEsRUFXYixTQVhhLEVBWWIsU0FaYSxFQWFiLFNBYmEsRUFjYixTQWRhLEVBZWIsU0FmYSxFQWdCYixTQWhCYSxFQWlCYixTQWpCYSxFQWtCYixTQWxCYSxFQW1CYixTQW5CYSxDQUFmOztBQXNCQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDOUI7QUFDQVIsRUFBQUEsS0FBSyxDQUFDUyxTQUFOLEdBQWtCLEVBQWxCO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQVk7QUFDMUIsUUFBTUMsYUFBYSxHQUFHWCxRQUFRLENBQUNZLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdEI7QUFDQUQsSUFBQUEsYUFBYSxDQUFDRSxTQUFkLGFBQTZCSCxNQUFNLENBQUNJLFFBQXBDLGdCQUFrREosTUFBTSxDQUFDSyxNQUF6RDtBQUNBWCxJQUFBQSxVQUFVLEdBQUdZLFNBQVMsRUFBdEI7QUFDQUwsSUFBQUEsYUFBYSxDQUFDTSxLQUFkLENBQW9CQyxlQUFwQixHQUFzQ2IsTUFBTSxDQUFDRCxVQUFELENBQTVDO0FBQ0FMLElBQUFBLEtBQUssQ0FBQ29CLFdBQU4sQ0FBa0JSLGFBQWxCO0FBQ0QsR0FORDtBQU9ELENBVkQ7O0FBWUEsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QmIsRUFBQUEsTUFBTSxHQUFHaUIsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQmpCLE1BQU0sQ0FBQ2tCLE1BQWxDLENBQVQ7QUFDQSxTQUFPcEIsTUFBUDtBQUNELENBSEQ7O0FBS0EsSUFBTXFCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2hDdkIsRUFBQUEsTUFBTSxDQUFDVyxTQUFQLEdBQW1CLEVBQW5CO0FBQ0FYLEVBQUFBLE1BQU0sQ0FBQ1csU0FBUCxHQUFtQlksSUFBbkI7QUFDRCxDQUhEOztBQUtPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQnJCLFVBQVUsQ0FBQ3FCLE9BQUQsQ0FBM0I7QUFBQSxDQUEzQjs7OztBQUNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQ0osRUFBQUEsZUFBZSxDQUFDLEVBQUQsQ0FBZixDQURxQyxDQUVyQzs7QUFDQSw4QkFIcUMsQ0FJckM7O0FBQ0E7QUFDQTtBQUNBO0FBQ0QsQ0FSTTs7OztBQVVBLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsUUFBYztBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVztBQUM5QztBQUNBLDZCQUY4QyxDQUc5Qzs7QUFDQSw2QkFKOEMsQ0FLOUM7O0FBQ0E7QUFDQTVCLEVBQUFBLE1BQU0sQ0FBQ00sU0FBUCxHQUFtQixFQUFuQjtBQUNBTixFQUFBQSxNQUFNLENBQUNXLFNBQVAseUNBQWtEaUIsSUFBbEQ7QUFDRCxDQVRNOzs7O0FBV0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ25DUCxFQUFBQSxlQUFlLENBQUMsYUFBRCxDQUFmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQU5NOzs7O0FBUUEsSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFNBQ2hDUixlQUFlLG1DQURpQjtBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbnQgZW5kIHBhcnRcbi8vIHBsYXllcuyXkCDqtIDtlZwg7Y6Y7J207KeAXG5cbmltcG9ydCB7IGRpc2FibGVDaGF0LCBlbmFibGVDaGF0IH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgY2xlYXJUaW1lciwgc3RhcnRUaW1lciB9IGZyb20gXCIuL2Nsb2NrXCI7XG5pbXBvcnQge1xuICBkaXNhYmxlQ2FudmFzLFxuICBoaWRlQ29udHJvbHMsXG4gIGVuYWJsZUNhbnZhcyxcbiAgc2hvd0NvbnRyb2xzLFxuICByZXNldENhbnZhcyxcbn0gZnJvbSBcIi4vcGFpbnRcIjtcblxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xuY29uc3Qgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmc1wiKTtcblxubGV0IG51bWJlcjtcbmxldCByYW5kTnVtYmVyO1xuY29uc3QgY29sb3JzID0gW1xuICBcIiMxYWJjOWNcIixcbiAgXCIjMTZhMDg1XCIsXG4gIFwiI2YxYzQwZlwiLFxuICBcIiNmMzljMTJcIixcbiAgXCIjMmVjYzcxXCIsXG4gIFwiIzI3YWU2MFwiLFxuICBcIiNkMzU0MDBcIixcbiAgXCIjMzQ5OGRiXCIsXG4gIFwiIzI5ODBiOVwiLFxuICBcIiNlNzRjM2NcIixcbiAgXCIjYzAzOTJiXCIsXG4gIFwiIzliNTliNlwiLFxuICBcIiM4ZTQ0YWRcIixcbiAgXCIjZWNmMGYxXCIsXG4gIFwiI2JkYzNjN1wiLFxuICBcIiMzNDQ5NWVcIixcbiAgXCIjMmMzZTUwXCIsXG4gIFwiIzk1YTVhNlwiLFxuICBcIiM3ZjhjOGRcIixcbl07XG5cbmNvbnN0IGFkZFBsYXllcnMgPSAocGxheWVycykgPT4ge1xuICAvLyDsnKDsoIDqsIAg6rCx7Iug65CgIOuVjOuniOuLpCDstIjquLDtmZTtlZjqs6Ag7IOI66GcIOunjOuTpOyWtOykjFxuICBib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwbGF5ZXJFbGVtZW50LmlubmVyVGV4dCA9IGAke3BsYXllci5uaWNrbmFtZX0gOiAke3BsYXllci5wb2ludHN9YDtcbiAgICByYW5kTnVtYmVyID0gZ2VuUmFuZG9tKCk7XG4gICAgcGxheWVyRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbcmFuZE51bWJlcl07XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyRWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2VuUmFuZG9tID0gKCkgPT4ge1xuICBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKTtcbiAgcmV0dXJuIG51bWJlcjtcbn07XG5cbmNvbnN0IHNldE5vdGlmaWNhdGlvbiA9ICh0ZXh0KSA9PiB7XG4gIG5vdGlmcy5pbm5lclRleHQgPSBcIlwiO1xuICBub3RpZnMuaW5uZXJUZXh0ID0gdGV4dDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVQbGF5ZXJVcGRhdGUgPSAoeyBzb2NrZXRzIH0pID0+IGFkZFBsYXllcnMoc29ja2V0cyk7XG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoKSA9PiB7XG4gIHNldE5vdGlmaWNhdGlvbihcIlwiKTtcbiAgLy8gZGlzYWJsZSBjYW52YXMgZXZlbnRcbiAgZGlzYWJsZUNhbnZhcygpO1xuICAvLyBoaWRkZW4gdGhlIGNhbnZhcyBjb250cm9sc1xuICBoaWRlQ29udHJvbHMoKTtcbiAgZW5hYmxlQ2hhdCgpO1xuICBzdGFydFRpbWVyKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUGFpbnRlck5vdGlmID0gKHsgd29yZCB9KSA9PiB7XG4gIC8vIGFibGUgdGhlIGNhbnZhc1xuICBlbmFibGVDYW52YXMoKTtcbiAgLy8gc2hvdyB0aGUgY29udHJvbHNcbiAgc2hvd0NvbnRyb2xzKCk7XG4gIC8vIGNoYXQgZGlzYWJsZVxuICBkaXNhYmxlQ2hhdCgpO1xuICBub3RpZnMuaW5uZXJIVE1MID0gXCJcIjtcbiAgbm90aWZzLmlubmVyVGV4dCA9IGBZb3UgYXJlIHRoZSBwYWludGVyLCBwYWludDogJHt3b3JkfWA7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZUVuZGVkID0gKCkgPT4ge1xuICBzZXROb3RpZmljYXRpb24oXCJHYW1lIEVuZGVkLlwiKTtcbiAgZGlzYWJsZUNhbnZhcygpO1xuICBoaWRlQ29udHJvbHMoKTtcbiAgcmVzZXRDYW52YXMoKTtcbiAgY2xlYXJUaW1lcigpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVTdGFydGluZyA9ICgpID0+XG4gIHNldE5vdGlmaWNhdGlvbihgR2FtZSB3aWxsIHN0YXJ0IGFmdGVyIDMgc2Vjb25kc2ApO1xuIl19
},{"./chat":1,"./clock":2,"./paint":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateScoket = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _paint = require("./paint");

var _players = require("./players");

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

  aSocket.on(events.newMsg, _chat.handleNewMsg); // beganPath 이벤트 수신

  aSocket.on(events.beganPath, _paint.handleBeganPath); // strokedPath 이벤트 수신

  aSocket.on(events.strokedPath, _paint.handleStrokedPath); // filled event 수신

  aSocket.on(events.filled, _paint.handleFilled); // cleared event 수신 => handleClear 호출

  aSocket.on(events.cleared, _paint.handleClear); // playerUpdate event를 수신 => handlePlayerUpdate 호출

  aSocket.on(events.playerUpdate, _players.handlePlayerUpdate); // gameStarted event를 수신 => handleGameStarted를 호출

  aSocket.on(events.gameStarted, _players.handleGameStarted); // painterNotif event를 수신 => handlePainterNotif릃 호출

  aSocket.on(events.painterNotif, _players.handlePainterNotif); // gameEnded event를 수신 => handleGameEnded 호출

  aSocket.on(events.gameEnded, _players.handleGameEnded); //

  aSocket.on(events.gameStarting, _players.handleGameStarting);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU2Nva2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3QiLCJuZXdNc2ciLCJoYW5kbGVOZXdNc2ciLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwiY2xlYXJlZCIsImhhbmRsZUNsZWFyIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwiZ2FtZVN0YXJ0ZWQiLCJoYW5kbGVHYW1lU3RhcnRlZCIsInBhaW50ZXJOb3RpZiIsImhhbmRsZVBhaW50ZXJOb3RpZiIsImdhbWVFbmRlZCIsImhhbmRsZUdhbWVFbmRlZCIsImdhbWVTdGFydGluZyIsImhhbmRsZUdhbWVTdGFydGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztBQU1BOztBQVhBO0FBQ0E7QUFrQkEsSUFBSUEsTUFBTSxHQUFHLElBQWIsQyxDQUVBOztBQUNPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCLEMsQ0FFUDs7Ozs7QUFDTyxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFEO0FBQUEsU0FBY0gsTUFBTSxHQUFHRyxPQUF2QjtBQUFBLENBQXJCLEMsQ0FFUDs7Ozs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDRCxPQUFELEVBQWE7QUFBQSxnQkFDbkJFLE1BRG1CO0FBQUEsTUFDOUJDLE1BRDhCLFdBQzlCQSxNQUQ4QjtBQUV0Q0osRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVosQ0FGc0MsQ0FHdEM7O0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQyw0QkFBM0IsRUFKc0MsQ0FLdEM7O0FBQ0FOLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNJLFlBQWxCLEVBQWdDQywrQkFBaEMsRUFOc0MsQ0FPdEM7O0FBQ0FSLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNNLE1BQWxCLEVBQTBCQyxrQkFBMUIsRUFSc0MsQ0FTdEM7O0FBQ0FWLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNRLFNBQWxCLEVBQTZCQyxzQkFBN0IsRUFWc0MsQ0FXdEM7O0FBQ0FaLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNVLFdBQWxCLEVBQStCQyx3QkFBL0IsRUFac0MsQ0FhdEM7O0FBQ0FkLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNZLE1BQWxCLEVBQTBCQyxtQkFBMUIsRUFkc0MsQ0FldEM7O0FBQ0FoQixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDYyxPQUFsQixFQUEyQkMsa0JBQTNCLEVBaEJzQyxDQWlCdEM7O0FBQ0FsQixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDZ0IsWUFBbEIsRUFBZ0NDLDJCQUFoQyxFQWxCc0MsQ0FtQnRDOztBQUNBcEIsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ2tCLFdBQWxCLEVBQStCQywwQkFBL0IsRUFwQnNDLENBcUJ0Qzs7QUFDQXRCLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNvQixZQUFsQixFQUFnQ0MsMkJBQWhDLEVBdEJzQyxDQXVCdEM7O0FBQ0F4QixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDc0IsU0FBbEIsRUFBNkJDLHdCQUE3QixFQXhCc0MsQ0F5QnRDOztBQUNBMUIsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ3dCLFlBQWxCLEVBQWdDQywyQkFBaEM7QUFDRCxDQTNCTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb250ZW5kIHBhcnRcbi8vIENsaWVudCBwYXJ0XG5cbmltcG9ydCB7IGhhbmRsZU5ld01zZyB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7IGhhbmRsZURpc2Nvbm5lY3QsIGhhbmRsZU5ld1VzZXIgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQge1xuICBoYW5kbGVCZWdhblBhdGgsXG4gIGhhbmRsZUNsZWFyLFxuICBoYW5kbGVGaWxsZWQsXG4gIGhhbmRsZVN0cm9rZWRQYXRoLFxufSBmcm9tIFwiLi9wYWludFwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlR2FtZUVuZGVkLFxuICBoYW5kbGVHYW1lU3RhcnRlZCxcbiAgaGFuZGxlR2FtZVN0YXJ0aW5nLFxuICBoYW5kbGVQYWludGVyTm90aWYsXG4gIGhhbmRsZVBsYXllclVwZGF0ZSxcbn0gZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuLy8g7IaM7LyT7J2EIOqwgOyguOyYpOuKlCDtlajsiJhcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbi8vIHNvY2tldCDsl4XrjbDsnbTtirgg7ZWo7IiYXG5leHBvcnQgY29uc3QgdXBkYXRlU2Nva2V0ID0gKGFTb2NrZXQpID0+IChzb2NrZXQgPSBhU29ja2V0KTtcblxuLy8g7IaM7LyTIOyCrOyaqVxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgdXBkYXRlU2Nva2V0KGFTb2NrZXQpO1xuICAvLyDsg4jroZzsmrQg7Jyg7KCA6rCAIOuTpOyWtOyYpOuKlCDsnbTrsqTtirjsnbggbmV3VXNlcuulvCDtla3sg4Eg65Oj6rOg7J6I7J2MXG4gIGFTb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld1VzZXIpO1xuICAvLyDsl7DqsrDsnbQg64Gd64Ks7J2E65WM7J2YIOydtOuypO2KuOulvCDtla3sg4Eg65Oj6rOgIOyeiOydjFxuICBhU29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3QpO1xuICAvLyBuZXdNc2cg7J2067Kk7Yq466W8IOuTo+uKlCDspJFcbiAgYVNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNc2cpO1xuICAvLyBiZWdhblBhdGgg7J2067Kk7Yq4IOyImOyLoFxuICBhU29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XG4gIC8vIHN0cm9rZWRQYXRoIOydtOuypO2KuCDsiJjsi6BcbiAgYVNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcbiAgLy8gZmlsbGVkIGV2ZW50IOyImOyLoFxuICBhU29ja2V0Lm9uKGV2ZW50cy5maWxsZWQsIGhhbmRsZUZpbGxlZCk7XG4gIC8vIGNsZWFyZWQgZXZlbnQg7IiY7IugID0+IGhhbmRsZUNsZWFyIO2YuOy2nFxuICBhU29ja2V0Lm9uKGV2ZW50cy5jbGVhcmVkLCBoYW5kbGVDbGVhcik7XG4gIC8vIHBsYXllclVwZGF0ZSBldmVudOulvCDsiJjsi6AgPT4gaGFuZGxlUGxheWVyVXBkYXRlIO2YuOy2nFxuICBhU29ja2V0Lm9uKGV2ZW50cy5wbGF5ZXJVcGRhdGUsIGhhbmRsZVBsYXllclVwZGF0ZSk7XG4gIC8vIGdhbWVTdGFydGVkIGV2ZW5066W8IOyImOyLoCA9PiBoYW5kbGVHYW1lU3RhcnRlZOulvCDtmLjstpxcbiAgYVNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0ZWQsIGhhbmRsZUdhbWVTdGFydGVkKTtcbiAgLy8gcGFpbnRlck5vdGlmIGV2ZW5066W8IOyImOyLoCA9PiBoYW5kbGVQYWludGVyTm90aWbrpoMg7Zi47LacXG4gIGFTb2NrZXQub24oZXZlbnRzLnBhaW50ZXJOb3RpZiwgaGFuZGxlUGFpbnRlck5vdGlmKTtcbiAgLy8gZ2FtZUVuZGVkIGV2ZW5066W8IOyImOyLoCA9PiBoYW5kbGVHYW1lRW5kZWQg7Zi47LacXG4gIGFTb2NrZXQub24oZXZlbnRzLmdhbWVFbmRlZCwgaGFuZGxlR2FtZUVuZGVkKTtcbiAgLy9cbiAgYVNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0aW5nLCBoYW5kbGVHYW1lU3RhcnRpbmcpO1xufTtcbiJdfQ==
},{"./chat":1,"./notifications":5,"./paint":6,"./players":7}]},{},[3])