<<<<<<< HEAD
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login.js");

require("./notifications");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMmIzM2FiOGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luLmpzXCI7XHJcbmltcG9ydCBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG4iXX0=
},{"./login.js":2,"./notifications":3,"./sockets":4}],2:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

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
  (0, _sockets.initSockets)(socket);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsUUFBckIsQ0FBakIsQyxDQUVBOztBQUNBLE1BQU1JLEtBQUssR0FBSUgsUUFBRCxJQUFjO0FBQzFCO0FBQ0EsUUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQixDQUYwQixDQUVGOztBQUN4QkQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztBQUFFVCxJQUFBQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQmIsVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTEwsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosU0FBakI7QUFDQUssRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFFRCxNQUFNVyxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNQyxLQUFLLEdBQUduQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLFFBQU07QUFBRXFCLElBQUFBO0FBQUYsTUFBWUQsS0FBbEI7QUFDQUEsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJqQixRQUFyQixFQUErQmdCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWixTQUFqQjtBQUNBSyxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xuXG4vLyDroZzqt7jsnbgg6riw64qlIO2VqOyImFxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcbiAgLy8gc29ja2V07J2AIO2YhOyerCBsb2NhbCDrs4DsiJhcbiAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpOyAvLyDsl7DqsrAgPT4gd2luZG93LnNvY2tldCA6IOuqqOuToCDtjIzsnbzsl5DshJwgc29ja2V07J2EIOyCrOyaqSDqsIDriqVcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcbiAgaW5pdFNvY2tldHMoc29ja2V0KTtcbn07XG5cbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgbG9nSW4obmlja25hbWUpO1xufVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnect = exports.handleNewUser = void 0;
// User notifications file
const notifications = document.getElementById("jsNotifications"); // 알림 호출 함수

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  notifications.appendChild(notification);
}; // 새로 들어온 유저의 닉네임을 호출


const handleNewUser = ({
  nickname
}) => fireNotification(`${nickname} just joined!`, "rgb(90, 200, 250)");

exports.handleNewUser = handleNewUser;

const handleDisconnect = ({
  nickname
}) => fireNotification(`${nickname} just left!`, "rgb(255, 149, 0)");

exports.handleDisconnect = handleDisconnect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaXJlTm90aWZpY2F0aW9uIiwidGV4dCIsImNvbG9yIiwibm90aWZpY2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVOZXdVc2VyIiwibmlja25hbWUiLCJoYW5kbGVEaXNjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLE1BQU1BLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUF0QixDLENBRUE7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQ3hDLFFBQU1DLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FYLEVBQUFBLGFBQWEsQ0FBQ1ksV0FBZCxDQUEwQk4sWUFBMUI7QUFDRCxDQU5ELEMsQ0FRQTs7O0FBQ08sTUFBTU8sYUFBYSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQzNCWCxnQkFBZ0IsQ0FBRSxHQUFFVyxRQUFTLGVBQWIsRUFBNkIsbUJBQTdCLENBRFg7Ozs7QUFHQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVELEVBQUFBO0FBQUYsQ0FBRCxLQUM5QlgsZ0JBQWdCLENBQUUsR0FBRVcsUUFBUyxhQUFiLEVBQTJCLGtCQUEzQixDQURYIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVXNlciBub3RpZmljYXRpb25zIGZpbGVcclxuY29uc3Qgbm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNOb3RpZmljYXRpb25zXCIpO1xyXG5cclxuLy8g7JWM66a8IO2YuOy2nCDtlajsiJhcclxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xyXG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xyXG4gIG5vdGlmaWNhdGlvbnMuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcclxufTtcclxuXHJcbi8vIOyDiOuhnCDrk6TslrTsmKgg7Jyg7KCA7J2YIOuLieuEpOyehOydhCDtmLjstpxcclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PlxyXG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiKDkwLCAyMDAsIDI1MClcIik7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdCA9ICh7IG5pY2tuYW1lIH0pID0+XHJcbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgMTQ5LCAwKVwiKTtcclxuIl19
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateScoket = exports.getSocket = void 0;

var _notifications = require("./notifications");

// frontend part
// Client part
let socket = null; // 소켓을 가져오는 함수

const getSocket = () => socket; // socket 업데이트 함수


exports.getSocket = getSocket;

const updateScoket = aSocket => socket = aSocket; // 소켓 사용


exports.updateScoket = updateScoket;

const initSockets = aSocket => {
  const {
    events
  } = window;
  updateScoket(socket); // 새로운 유저가 들어오는 이벤트인 newUser를 항상 듣고있음

  aSocket.on(events.newUser, _notifications.handleNewUser); // 연결이 끝났을때의 이벤트를 항상 듣고 있음

  aSocket.on(events.disconnected, _notifications.handleDisconnect);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU2Nva2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwiZXZlbnRzIiwid2luZG93Iiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFIQTtBQUNBO0FBSUEsSUFBSUEsTUFBTSxHQUFHLElBQWIsQyxDQUVBOztBQUNPLE1BQU1DLFNBQVMsR0FBRyxNQUFNRCxNQUF4QixDLENBRVA7Ozs7O0FBQ08sTUFBTUUsWUFBWSxHQUFJQyxPQUFELElBQWNILE1BQU0sR0FBR0csT0FBNUMsQyxDQUVQOzs7OztBQUNPLE1BQU1DLFdBQVcsR0FBSUQsT0FBRCxJQUFhO0FBQ3RDLFFBQU07QUFBRUUsSUFBQUE7QUFBRixNQUFhQyxNQUFuQjtBQUNBSixFQUFBQSxZQUFZLENBQUNGLE1BQUQsQ0FBWixDQUZzQyxDQUd0Qzs7QUFDQUcsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdGLE1BQU0sQ0FBQ0csT0FBbEIsRUFBMkJDLDRCQUEzQixFQUpzQyxDQUt0Qzs7QUFDQU4sRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdGLE1BQU0sQ0FBQ0ssWUFBbEIsRUFBZ0NDLCtCQUFoQztBQUVELENBUk0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZCBwYXJ0XHJcbi8vIENsaWVudCBwYXJ0XHJcblxyXG5pbXBvcnQgeyBoYW5kbGVEaXNjb25uZWN0LCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG5cclxubGV0IHNvY2tldCA9IG51bGw7XHJcblxyXG4vLyDshozsvJPsnYQg6rCA7KC47Jik64qUIO2VqOyImFxyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xyXG5cclxuLy8gc29ja2V0IOyXheuNsOydtO2KuCDtlajsiJhcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjb2tldCA9IChhU29ja2V0KSA9PiAoc29ja2V0ID0gYVNvY2tldCk7XHJcblxyXG4vLyDshozsvJMg7IKs7JqpXHJcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XHJcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcclxuICB1cGRhdGVTY29rZXQoc29ja2V0KTtcclxuICAvLyDsg4jroZzsmrQg7Jyg7KCA6rCAIOuTpOyWtOyYpOuKlCDsnbTrsqTtirjsnbggbmV3VXNlcuulvCDtla3sg4Eg65Oj6rOg7J6I7J2MXHJcbiAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XHJcbiAgLy8g7Jew6rKw7J20IOuBneuCrOydhOuVjOydmCDsnbTrsqTtirjrpbwg7ZWt7IOBIOuTo+qzoCDsnojsnYxcclxuICBhU29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3QpO1xyXG5cclxufTtcclxuIl19
},{"./notifications":3}]},{},[1])
=======
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }
      var f = (n[o] = { exports: {} });
      t[o][0].call(
        f.exports,
        function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        f,
        f.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        var _sockets = require("./sockets");

        // 채팅에 관한 함수를 관리한는 파일
        const message = document.getElementById("jsMessage");
        const sendMsg = document.getElementById("jsSendMsg"); // 메세지를 form에 보여지게끔 추가하는 함수

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
          (0, _sockets.getSocket)().emit(window.events.sendMsg, {
            message: value,
          });
          input.value = "";
          appendMsg(value);
        };

        if (sendMsg) {
          sendMsg.addEventListener("submit", handleSendMsg);
        }
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZW5kTXNnIiwiYXBwZW5kTXNnIiwidGV4dCIsIm5pY2tuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZW5kTXNnIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBREE7QUFHQSxNQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCLEMsQ0FFQTs7QUFDQSxNQUFNRSxTQUFTLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEtBQW9CO0FBQ3BDLFFBQU1DLEVBQUUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUQsRUFBQUEsRUFBRSxDQUFDRSxTQUFILEdBQWdCO0FBQ2xCLDhCQUE4QkgsUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUFPO0FBQ3hELFVBQVVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLE1BQU8sV0FBVUQsSUFBSztBQUN0RDtBQUNBLEtBSkU7QUFLQUwsRUFBQUEsT0FBTyxDQUFDVSxXQUFSLENBQW9CSCxFQUFwQjtBQUNELENBUkQ7O0FBVUEsTUFBTUksYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0JBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLFFBQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBWUYsS0FBbEI7QUFDQSw0QkFBWUcsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFSCxJQUFBQSxPQUFPLEVBQUVnQjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQVBEOztBQVNBLElBQUliLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNpQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1QsYUFBbkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIOyxhO2MheyXkCDqtIDtlZwg7ZWo7IiY66W8IOq0gOumrO2VnOuKlCDtjIzsnbxcbmltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG4vLyDrqZTshLjsp4DrpbwgZm9ybeyXkCDrs7Tsl6zsp4DqsozrgZQg7LaU6rCA7ZWY64qUIO2VqOyImFxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+XG4gICAgICAgICR7bmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91OlwifTwvc3Bhbj4gJHt0ZXh0fVxuICAgICAgICBcbiAgICBgO1xuICBtZXNzYWdlLmFwcGVuZENoaWxkKGxpKTtcbn07XG5cbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5pZiAoc2VuZE1zZykge1xuICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU2VuZE1zZyk7XG59XG4iXX0=
      },
      { "./sockets": 5 },
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        require("./sockets");

        require("./login.js");

        require("./notifications");

        require("./chat");
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMWE2ZGIyN2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbiJdfQ==
      },
      { "./chat": 1, "./login.js": 3, "./notifications": 4, "./sockets": 5 },
    ],
    3: [
      function (require, module, exports) {
        "use strict";

        var _sockets = require("./sockets");

        const body = document.querySelector("body");
        const loginForm = document.getElementById("jsLogin");
        const LOGGED_OUT = "loggedOut";
        const LOGGED_IN = "loggedIn";
        const NICKNAME = "nickname";
        const nickname = localStorage.getItem(NICKNAME); // 로그인 기능 함수

        const logIn = (nickname) => {
          // socket은 현재 local 변수
          const socket = io("/"); // 연결 => window.socket : 모든 파일에서 socket을 사용 가능

          socket.emit(window.events.setNickname, {
            nickname,
          });
          (0, _sockets.initSockets)(socket);
        };

        if (nickname === null) {
          body.className = LOGGED_OUT;
        } else {
          body.className = LOGGED_IN;
          logIn(nickname);
        }

        const handleFormSubmit = (event) => {
          event.preventDefault();
          const input = loginForm.querySelector("input");
          const { value } = input;
          input.value = "";
          localStorage.setItem(NICKNAME, value);
          body.className = LOGGED_IN;
          logIn(value);
        };

        if (loginForm) {
          loginForm.addEventListener("submit", handleFormSubmit);
        }
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsUUFBckIsQ0FBakIsQyxDQUVBOztBQUNBLE1BQU1JLEtBQUssR0FBSUgsUUFBRCxJQUFjO0FBQzFCO0FBQ0EsUUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQixDQUYwQixDQUVGOztBQUN4QkQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztBQUFFVCxJQUFBQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQmIsVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTEwsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosU0FBakI7QUFDQUssRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFFRCxNQUFNVyxnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2xDQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNQyxLQUFLLEdBQUduQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLFFBQU07QUFBRXFCLElBQUFBO0FBQUYsTUFBWUQsS0FBbEI7QUFDQUEsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJqQixRQUFyQixFQUErQmdCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWixTQUFqQjtBQUNBSyxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xuXG4vLyDroZzqt7jsnbgg6riw64qlIO2VqOyImFxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcbiAgLy8gc29ja2V07J2AIO2YhOyerCBsb2NhbCDrs4DsiJhcbiAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpOyAvLyDsl7DqsrAgPT4gd2luZG93LnNvY2tldCA6IOuqqOuToCDtjIzsnbzsl5DshJwgc29ja2V07J2EIOyCrOyaqSDqsIDriqVcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcbiAgaW5pdFNvY2tldHMoc29ja2V0KTtcbn07XG5cbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgbG9nSW4obmlja25hbWUpO1xufVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
      },
      { "./sockets": 5 },
    ],
    4: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.handleDisconnect = exports.handleNewUser = void 0;
        // User notifications file
        const body = document.querySelector("body"); // 알림 호출 함수

        const fireNotification = (text, color) => {
          const notification = document.createElement("div");
          notification.innerText = text;
          notification.style.backgroundColor = color;
          notification.className = "notification";
          body.appendChild(notification);
        }; // 새로 들어온 유저의 닉네임을 호출

        const handleNewUser = ({ nickname }) =>
          fireNotification(`${nickname} just joined!`, "rgb(90, 200, 250)");

        exports.handleNewUser = handleNewUser;

        const handleDisconnect = ({ nickname }) =>
          fireNotification(`${nickname} just left!`, "rgb(255, 149, 0)");

        exports.handleDisconnect = handleDisconnect;
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYixDLENBRUE7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQ3hDLFFBQU1DLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FYLEVBQUFBLElBQUksQ0FBQ1ksV0FBTCxDQUFpQk4sWUFBakI7QUFDRCxDQU5ELEMsQ0FRQTs7O0FBQ08sTUFBTU8sYUFBYSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQzNCWCxnQkFBZ0IsQ0FBRSxHQUFFVyxRQUFTLGVBQWIsRUFBNkIsbUJBQTdCLENBRFg7Ozs7QUFHQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVELEVBQUFBO0FBQUYsQ0FBRCxLQUM5QlgsZ0JBQWdCLENBQUUsR0FBRVcsUUFBUyxhQUFiLEVBQTJCLGtCQUEzQixDQURYIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVXNlciBub3RpZmljYXRpb25zIGZpbGVcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuLy8g7JWM66a8IO2YuOy2nCDtlajsiJhcbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XG4gIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbn07XG5cbi8vIOyDiOuhnCDrk6TslrTsmKgg7Jyg7KCA7J2YIOuLieuEpOyehOydhCDtmLjstpxcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoOTAsIDIwMCwgMjUwKVwiKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSAoeyBuaWNrbmFtZSB9KSA9PlxuICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCJyZ2IoMjU1LCAxNDksIDApXCIpO1xuIl19
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.initSockets = exports.updateScoket = exports.getSocket = void 0;

        var _chat = require("./chat");

        var _notifications = require("./notifications");

        // frontend part
        // Client part
        let socket = null; // 소켓을 가져오는 함수

        const getSocket = () => socket; // socket 업데이트 함수

        exports.getSocket = getSocket;

        const updateScoket = (aSocket) => (socket = aSocket); // 소켓 사용

        exports.updateScoket = updateScoket;

        const initSockets = (aSocket) => {
          const { events } = window;
          updateScoket(socket); // 새로운 유저가 들어오는 이벤트인 newUser를 항상 듣고있음

          aSocket.on(events.newUser, _notifications.handleNewUser); // 연결이 끝났을때의 이벤트를 항상 듣고 있음

          aSocket.on(events.disconnected, _notifications.handleDisconnect); // newMsg 이벤트를 듣는 중

          aSocket.on(events.newMsg, _chat.handleNewMsg);
        };

        exports.initSockets = initSockets;
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU2Nva2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwiZXZlbnRzIiwid2luZG93Iiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3QiLCJuZXdNc2ciLCJoYW5kbGVOZXdNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFKQTtBQUNBO0FBS0EsSUFBSUEsTUFBTSxHQUFHLElBQWIsQyxDQUVBOztBQUNPLE1BQU1DLFNBQVMsR0FBRyxNQUFNRCxNQUF4QixDLENBRVA7Ozs7O0FBQ08sTUFBTUUsWUFBWSxHQUFJQyxPQUFELElBQWNILE1BQU0sR0FBR0csT0FBNUMsQyxDQUVQOzs7OztBQUNPLE1BQU1DLFdBQVcsR0FBSUQsT0FBRCxJQUFhO0FBQ3RDLFFBQU07QUFBRUUsSUFBQUE7QUFBRixNQUFhQyxNQUFuQjtBQUNBSixFQUFBQSxZQUFZLENBQUNGLE1BQUQsQ0FBWixDQUZzQyxDQUd0Qzs7QUFDQUcsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdGLE1BQU0sQ0FBQ0csT0FBbEIsRUFBMkJDLDRCQUEzQixFQUpzQyxDQUt0Qzs7QUFDQU4sRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdGLE1BQU0sQ0FBQ0ssWUFBbEIsRUFBZ0NDLCtCQUFoQyxFQU5zQyxDQU90Qzs7QUFDQVIsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdGLE1BQU0sQ0FBQ08sTUFBbEIsRUFBMEJDLGtCQUExQjtBQUNELENBVE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZCBwYXJ0XG4vLyBDbGllbnQgcGFydFxuXG5pbXBvcnQgeyBoYW5kbGVOZXdNc2cgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBoYW5kbGVEaXNjb25uZWN0LCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuLy8g7IaM7LyT7J2EIOqwgOyguOyYpOuKlCDtlajsiJhcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbi8vIHNvY2tldCDsl4XrjbDsnbTtirgg7ZWo7IiYXG5leHBvcnQgY29uc3QgdXBkYXRlU2Nva2V0ID0gKGFTb2NrZXQpID0+IChzb2NrZXQgPSBhU29ja2V0KTtcblxuLy8g7IaM7LyTIOyCrOyaqVxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgdXBkYXRlU2Nva2V0KHNvY2tldCk7XG4gIC8vIOyDiOuhnOyatCDsnKDsoIDqsIAg65Ok7Ja07Jik64qUIOydtOuypO2KuOyduCBuZXdVc2Vy66W8IO2VreyDgSDrk6Pqs6DsnojsnYxcbiAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gIC8vIOyXsOqysOydtCDrgZ3rgqzsnYTrlYzsnZgg7J2067Kk7Yq466W8IO2VreyDgSDrk6Pqs6Ag7J6I7J2MXG4gIGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdCk7XG4gIC8vIG5ld01zZyDsnbTrsqTtirjrpbwg65Oj64qUIOykkVxuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01zZyk7XG59O1xuIl19
      },
      { "./chat": 1, "./notifications": 4 },
    ],
  },
  {},
  [2]
);
>>>>>>> chat
