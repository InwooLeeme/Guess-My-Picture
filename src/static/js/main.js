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

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.handleNewMsg = void 0;

        var _sockets = require("./sockets");

        // 채팅에 관한 함수를 관리한는 파일
        var message = document.getElementById("jsMessage");
        var sendMsg = document.getElementById("jsSendMsg"); // 메세지를 form에 보여지게끔 추가하는 함수

        var appendMsg = function appendMsg(text, nickname) {
          var li = document.createElement("li");
          li.innerHTML = '\n        <span class="author '
            .concat(nickname ? "out" : "self", '">\n        ')
            .concat(nickname ? nickname : "You:", "</span> ")
            .concat(text, "\n        \n    ");
          message.appendChild(li);
        };

        var handleSendMsg = function handleSendMsg(event) {
          event.preventDefault();
          var input = sendMsg.querySelector("input");
          var value = input.value;
          (0, _sockets.getSocket)().emit(window.events.sendMsg, {
            message: value,
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
      },
      { "./sockets": 6 },
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        require("./sockets");

        require("./login.js");

        require("./notifications");

        require("./chat");

        require("./paint");
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTQwNGNlMWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vcGFpbnRcIjtcbiJdfQ==
      },
      {
        "./chat": 1,
        "./login.js": 3,
        "./notifications": 4,
        "./paint": 5,
        "./sockets": 6,
      },
    ],
    3: [
      function (require, module, exports) {
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
            nickname: nickname,
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
      },
      { "./sockets": 6 },
    ],
    4: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
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
          return fireNotification(
            "".concat(nickname, " just joined!"),
            "rgb(90, 200, 250)"
          );
        };

        exports.handleNewUser = handleNewUser;

        var handleDisconnect = function handleDisconnect(_ref2) {
          var nickname = _ref2.nickname;
          return fireNotification(
            "".concat(nickname, " just left!"),
            "rgb(255, 149, 0)"
          );
        };

        exports.handleDisconnect = handleDisconnect;
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYixDLENBRUE7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDeEMsTUFBTUMsWUFBWSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQUQsRUFBQUEsWUFBWSxDQUFDRSxTQUFiLEdBQXlCSixJQUF6QjtBQUNBRSxFQUFBQSxZQUFZLENBQUNHLEtBQWIsQ0FBbUJDLGVBQW5CLEdBQXFDTCxLQUFyQztBQUNBQyxFQUFBQSxZQUFZLENBQUNLLFNBQWIsR0FBeUIsY0FBekI7QUFDQVgsRUFBQUEsSUFBSSxDQUFDWSxXQUFMLENBQWlCTixZQUFqQjtBQUNELENBTkQsQyxDQVFBOzs7QUFDTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixtQkFBN0IsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQzlCWCxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsa0JBQTNCLENBRGM7QUFBQSxDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFVzZXIgbm90aWZpY2F0aW9ucyBmaWxlXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIOyVjOumvCDtmLjstpwg7ZWo7IiYXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59O1xuXG4vLyDsg4jroZwg65Ok7Ja07JioIOycoOyggOydmCDri4nrhKTsnoTsnYQg7Zi47LacXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7IG5pY2tuYW1lIH0pID0+XG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiKDkwLCAyMDAsIDI1MClcIik7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gKHsgbmlja25hbWUgfSkgPT5cbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgMTQ5LCAwKVwiKTtcbiJdfQ==
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.handleStrokedPath = exports.handleBeganPath = void 0;

        var _sockets = require("./sockets");

        // Painting game page
        // Front end
        var canvas = document.getElementById("jsCanvas");
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
          ctx.lineTo(x, y);
          ctx.stroke();
        };

        function handleMove(event) {
          var x = event.offsetX;
          var y = event.offsetY;

          if (!pressed) {
            // 켄버스 위에서 마우스가 눌러졌을 때
            beginPath(x, y); // 실시간으로 beginPath 이벤트 발생

            (0, _sockets.getSocket)().emit(window.events.beginPath, {
              x: x,
              y: y,
            });
          } else {
            // 캔버스 위에서 마우스 클릭을 멈췄을 때
            strokePath(x, y); // 실시간으로 strokePath 이벤트 발생

            (0, _sockets.getSocket)().emit(window.events.strokePath, {
              x: x,
              y: y,
            });
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

        var handleBeganPath = function handleBeganPath(_ref) {
          var x = _ref.x,
            y = _ref.y;
          return beginPath(x, y);
        };

        exports.handleBeganPath = handleBeganPath;

        var handleStrokedPath = function handleStrokedPath(_ref2) {
          var x = _ref2.x,
            y = _ref2.y;
          return strokePath(x, y);
        };

        exports.handleStrokedPath = handleStrokedPath;
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWxsQnRuIiwicXVlcnlTZWxlY3RvciIsImNsZWFyQnRuIiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImN0eCIsImdldENvbnRleHQiLCJDQU5WQVNfU0laRSIsIndpZHRoIiwiaGVpZ2h0IiwibGluZVdpZHRoIiwicHJlc3NlZCIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwic3Ryb2tlUGF0aCIsImxpbmVUbyIsInN0cm9rZSIsImhhbmRsZU1vdmUiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsInN0YXJ0UGFpbnRpbmciLCJzdG9wUGFpbnRpbmciLCJjbGVhckNhbnZhcyIsImNsZWFyUmVjdCIsImZpbGxDYW52YXMiLCJmaWxsUmVjdCIsInNlbGVjdENvbG9yIiwidGFyZ2V0aW5nIiwidGFyZ2V0IiwiY29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0QmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImhhbmRsZUJlZ2FuUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBRkE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixzQkFBdkIsQ0FBaEI7QUFDQSxJQUFNQyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixzQkFBdkIsQ0FBakI7QUFDQSxJQUFNRSxNQUFNLEdBQUdMLFFBQVEsQ0FBQ00sc0JBQVQsQ0FBZ0MsT0FBaEMsQ0FB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d0IsU0FBeEIsRUFBbUNkLFlBQW5DO0FBQ0E5QixFQUFBQSxNQUFNLENBQUM0QyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQ2QsWUFBdEM7QUFDQXpCLEVBQUFBLFFBQVEsQ0FBQ3VDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DYixXQUFuQztBQUNBNUIsRUFBQUEsT0FBTyxDQUFDeUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NYLFVBQWxDO0FBQ0Q7O0FBRURZLEtBQUssQ0FBQ0MsSUFBTixDQUFXeEMsTUFBWCxFQUFtQnlDLE9BQW5CLENBQTJCLFVBQUNULEtBQUQsRUFBVztBQUNwQ0EsRUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixPQUF2QixFQUFnQ1QsV0FBaEM7QUFDRCxDQUZEOztBQUlPLElBQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHaEMsQ0FBSCxRQUFHQSxDQUFIO0FBQUEsTUFBTUMsQ0FBTixRQUFNQSxDQUFOO0FBQUEsU0FBY0YsU0FBUyxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBdkI7QUFBQSxDQUF4Qjs7OztBQUNBLElBQU1nQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR2pDLENBQUgsU0FBR0EsQ0FBSDtBQUFBLE1BQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLFNBQWNFLFVBQVUsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLENBQXhCO0FBQUEsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWludGluZyBnYW1lIHBhZ2Vcbi8vIEZyb250IGVuZFxuaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGZpbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzTW9kZTpudGgtY2hpbGQoMSlcIik7XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNNb2RlOm50aC1jaGlsZCgyKVwiKTtcbmNvbnN0IGNvbG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xvclwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IENBTlZBU19TSVpFID0gNzAwO1xuXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcbmN0eC5saW5lV2lkdGggPSAyLjU7XG5cbmxldCBwcmVzc2VkID0gZmFsc2U7XG5cbi8vIOuLpOuluCDtlajsiJjsl5Drj4Qg7IKs7Jqp7ZWY6riwIOychO2VtOyEnCDtlajsiJjtmZQg7ZWY7JiA7J2MIChiZWdpblBhdGggYW5kIHN0cm9rZWRQYXRoKVxuY29uc3QgYmVnaW5QYXRoID0gKHgsIHkpID0+IHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHgsIHkpO1xufTtcblxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5KSA9PiB7XG4gIGN0eC5saW5lVG8oeCwgeSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQpIHtcbiAgbGV0IHggPSBldmVudC5vZmZzZXRYO1xuICBsZXQgeSA9IGV2ZW50Lm9mZnNldFk7XG4gIGlmICghcHJlc3NlZCkge1xuICAgIC8vIOy8hOuyhOyKpCDsnITsl5DshJwg66eI7Jqw7Iqk6rCAIOuIjOufrOyhjOydhCDrlYxcbiAgICBiZWdpblBhdGgoeCwgeSk7XG4gICAgLy8g7Iuk7Iuc6rCE7Jy866GcIGJlZ2luUGF0aCDsnbTrsqTtirgg67Cc7IOdXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5IH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIOy6lOuyhOyKpCDsnITsl5DshJwg66eI7Jqw7IqkIO2BtOumreydhCDrqYjst4TsnYQg65WMXG4gICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICAvLyDsi6Tsi5zqsITsnLzroZwgc3Ryb2tlUGF0aCDsnbTrsqTtirgg67Cc7IOdXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHsgeCwgeSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKCkge1xuICBwcmVzc2VkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcHJlc3NlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbn1cbmZ1bmN0aW9uIGZpbGxDYW52YXMoKSB7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihldmVudCkge1xuICBjb25zdCB0YXJnZXRpbmcgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRpbmcpO1xuICBjb25zdCBnZXRCYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5iYWNrZ3JvdW5kQ29sb3I7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGdldEJhY2tncm91bmRDb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGdldEJhY2tncm91bmRDb2xvcjtcbn1cblxuaWYgKGNhbnZhcykge1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyQ2FudmFzKTtcbiAgZmlsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsbENhbnZhcyk7XG59XG5cbkFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKChjb2xvcikgPT4ge1xuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0Q29sb3IpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHkgfSkgPT4gc3Ryb2tlUGF0aCh4LCB5KTtcbiJdfQ==
      },
      { "./sockets": 6 },
    ],
    6: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.initSockets = exports.updateScoket = exports.getSocket = void 0;

        var _chat = require("./chat");

        var _notifications = require("./notifications");

        var _paint = require("./paint");

        // frontend part
        // Client part
        var socket = null; // 소켓을 가져오는 함수

        var getSocket = function getSocket() {
          return socket;
        }; // socket 업데이트 함수

        exports.getSocket = getSocket;

        var updateScoket = function updateScoket(aSocket) {
          return (socket = aSocket);
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

          aSocket.on(events.strokedPath, _paint.handleStrokedPath);
        };

        exports.initSockets = initSockets;
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU2Nva2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3QiLCJuZXdNc2ciLCJoYW5kbGVOZXdNc2ciLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBTEE7QUFDQTtBQU1BLElBQUlBLE1BQU0sR0FBRyxJQUFiLEMsQ0FFQTs7QUFDTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQixDLENBRVA7Ozs7O0FBQ08sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsT0FBRDtBQUFBLFNBQWNILE1BQU0sR0FBR0csT0FBdkI7QUFBQSxDQUFyQixDLENBRVA7Ozs7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQUEsZ0JBQ25CRSxNQURtQjtBQUFBLE1BQzlCQyxNQUQ4QixXQUM5QkEsTUFEOEI7QUFFdENKLEVBQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaLENBRnNDLENBR3RDOztBQUNBQSxFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDRSxPQUFsQixFQUEyQkMsNEJBQTNCLEVBSnNDLENBS3RDOztBQUNBTixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDSSxZQUFsQixFQUFnQ0MsK0JBQWhDLEVBTnNDLENBT3RDOztBQUNBUixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDTSxNQUFsQixFQUEwQkMsa0JBQTFCLEVBUnNDLENBU3RDOztBQUNBVixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDUSxTQUFsQixFQUE2QkMsc0JBQTdCLEVBVnNDLENBV3RDOztBQUNBWixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDVSxXQUFsQixFQUErQkMsd0JBQS9CO0FBQ0QsQ0FiTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb250ZW5kIHBhcnRcbi8vIENsaWVudCBwYXJ0XG5cbmltcG9ydCB7IGhhbmRsZU5ld01zZyB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7IGhhbmRsZURpc2Nvbm5lY3QsIGhhbmRsZU5ld1VzZXIgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBoYW5kbGVCZWdhblBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoIH0gZnJvbSBcIi4vcGFpbnRcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbi8vIOyGjOy8k+ydhCDqsIDsoLjsmKTripQg7ZWo7IiYXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG4vLyBzb2NrZXQg7JeF642w7J207Yq4IO2VqOyImFxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjb2tldCA9IChhU29ja2V0KSA9PiAoc29ja2V0ID0gYVNvY2tldCk7XG5cbi8vIOyGjOy8kyDsgqzsmqlcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XG4gIHVwZGF0ZVNjb2tldChhU29ja2V0KTtcbiAgLy8g7IOI66Gc7Jq0IOycoOyggOqwgCDrk6TslrTsmKTripQg7J2067Kk7Yq47J24IG5ld1VzZXLrpbwg7ZWt7IOBIOuTo+qzoOyeiOydjFxuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgLy8g7Jew6rKw7J20IOuBneuCrOydhOuVjOydmCDsnbTrsqTtirjrpbwg7ZWt7IOBIOuTo+qzoCDsnojsnYxcbiAgYVNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0KTtcbiAgLy8gbmV3TXNnIOydtOuypO2KuOulvCDrk6PripQg7KSRXG4gIGFTb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TXNnKTtcbiAgLy8gYmVnYW5QYXRoIOydtOuypO2KuCDsiJjsi6BcbiAgYVNvY2tldC5vbihldmVudHMuYmVnYW5QYXRoLCBoYW5kbGVCZWdhblBhdGgpO1xuICAvLyBzdHJva2VkUGF0aCDsnbTrsqTtirgg7IiY7IugXG4gIGFTb2NrZXQub24oZXZlbnRzLnN0cm9rZWRQYXRoLCBoYW5kbGVTdHJva2VkUGF0aCk7XG59O1xuIl19
      },
      { "./chat": 1, "./notifications": 4, "./paint": 5 },
    ],
  },
  {},
  [2]
);
