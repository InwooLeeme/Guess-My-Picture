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
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDUxZWZmNjUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vcGFpbnRcIjtcbiJdfQ==
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
        exports.handleClear = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

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
          var color =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : null;
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
              y: y,
            });
          } else {
            // 캔버스 위에서 마우스 클릭을 멈췄을 때
            strokePath(x, y); // 실시간으로 strokePath 이벤트 발생
            // color를 보내줌으로써 그리고 있는 색상 정보까지 포함

            (0, _sockets.getSocket)().emit(window.events.strokePath, {
              x: x,
              y: y,
              color: ctx.strokeStyle,
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
          var color =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null;
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
            color: ctx.fillStyle,
          });
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
          clearBtn.addEventListener("click", clearTheCanvas);
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
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWxsQnRuIiwicXVlcnlTZWxlY3RvciIsImNsZWFyQnRuIiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImN0eCIsImdldENvbnRleHQiLCJDQU5WQVNfU0laRSIsIndpZHRoIiwiaGVpZ2h0IiwibGluZVdpZHRoIiwicHJlc3NlZCIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwic3Ryb2tlUGF0aCIsImNvbG9yIiwiY3VycmVudENvbG9yIiwic3Ryb2tlU3R5bGUiLCJsaW5lVG8iLCJzdHJva2UiLCJjbGVhckNhbnZhcyIsImNsZWFyUmVjdCIsImhhbmRsZU1vdmUiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsInN0YXJ0UGFpbnRpbmciLCJzdG9wUGFpbnRpbmciLCJjbGVhclRoZUNhbnZhcyIsImNsZWFyIiwiZmlsbCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbENhbnZhcyIsInNlbGVjdENvbG9yIiwidGFyZ2V0aW5nIiwidGFyZ2V0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldEJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiLCJoYW5kbGVDbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUZBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHSixRQUFRLENBQUNHLGFB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QUF3QixZQUF4QixFQUFzQ2IsWUFBdEM7QUFDQTlCLEVBQUFBLFFBQVEsQ0FBQzJDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DWixjQUFuQztBQUNBakMsRUFBQUEsT0FBTyxDQUFDNkMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NQLFVBQWxDO0FBQ0Q7O0FBRURRLEtBQUssQ0FBQ0MsSUFBTixDQUFXNUMsTUFBWCxFQUFtQjZDLE9BQW5CLENBQTJCLFVBQUMvQixLQUFELEVBQVc7QUFDcENBLEVBQUFBLEtBQUssQ0FBQzRCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDTixXQUFoQztBQUNELENBRkQ7O0FBSU8sSUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdwQyxDQUFILFFBQUdBLENBQUg7QUFBQSxNQUFNQyxDQUFOLFFBQU1BLENBQU47QUFBQSxTQUFjRixTQUFTLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUF2QjtBQUFBLENBQXhCOzs7O0FBQ0EsSUFBTW9DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHckMsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsTUFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsTUFBU0csS0FBVCxTQUFTQSxLQUFUO0FBQUEsU0FBcUJELFVBQVUsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLEVBQU9HLEtBQVAsQ0FBL0I7QUFBQSxDQUExQjs7OztBQUNBLElBQU1rQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdsQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFla0IsSUFBSSxDQUFDbEIsS0FBRCxDQUFuQjtBQUFBLENBQXJCOzs7O0FBQ0EsSUFBTW1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTTlCLFdBQVcsRUFBakI7QUFBQSxDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBhaW50aW5nIGdhbWUgcGFnZVxuLy8gRnJvbnQgZW5kXG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzQ2FudmFzXCIpO1xuY29uc3QgZmlsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNNb2RlOm50aC1jaGlsZCgxKVwiKTtcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc01vZGU6bnRoLWNoaWxkKDIpXCIpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbG9yXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XG5cbmNhbnZhcy53aWR0aCA9IENBTlZBU19TSVpFO1xuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xuY3R4LmxpbmVXaWR0aCA9IDIuNTtcblxubGV0IHByZXNzZWQgPSBmYWxzZTtcblxuLy8g64uk66W4IO2VqOyImOyXkOuPhCDsgqzsmqntlZjquLAg7JyE7ZW07IScIO2VqOyImO2ZlCDtlZjsmIDsnYwgKGJlZ2luUGF0aCBhbmQgc3Ryb2tlZFBhdGgpXG5jb25zdCBiZWdpblBhdGggPSAoeCwgeSkgPT4ge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeCwgeSk7XG59O1xuXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yID0gbnVsbCkgPT4ge1xuICBsZXQgY3VycmVudENvbG9yID0gY3R4LnN0cm9rZVN0eWxlO1xuICBpZiAoY29sb3IgIT09IG51bGwpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgfVxuICBjdHgubGluZVRvKHgsIHkpO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbn07XG5cbmNvbnN0IGNsZWFyQ2FudmFzID0gKCkgPT4ge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50KSB7XG4gIGxldCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgbGV0IHkgPSBldmVudC5vZmZzZXRZO1xuICBpZiAoIXByZXNzZWQpIHtcbiAgICAvLyDsvITrsoTsiqQg7JyE7JeQ7IScIOuniOyasOyKpOqwgCDriIzrn6zsoYzsnYQg65WMXG4gICAgYmVnaW5QYXRoKHgsIHkpO1xuICAgIC8vIOyLpOyLnOqwhOycvOuhnCBiZWdpblBhdGgg7J2067Kk7Yq4IOuwnOyDnVxuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5iZWdpblBhdGgsIHsgeCwgeSB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyDsupTrsoTsiqQg7JyE7JeQ7IScIOuniOyasOyKpCDtgbTrpq3snYQg66mI7LeE7J2EIOuVjFxuICAgIHN0cm9rZVBhdGgoeCwgeSk7XG4gICAgLy8g7Iuk7Iuc6rCE7Jy866GcIHN0cm9rZVBhdGgg7J2067Kk7Yq4IOuwnOyDnVxuICAgIC8vIGNvbG9y66W8IOuztOuCtOykjOycvOuhnOyNqCDqt7jrpqzqs6Ag7J6I64qUIOyDieyDgSDsoJXrs7TquYzsp4Ag7Y+s7ZWoXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgY29sb3I6IGN0eC5zdHJva2VTdHlsZSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKCkge1xuICBwcmVzc2VkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcHJlc3NlZCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gY2xlYXJUaGVDYW52YXMoKSB7XG4gIGNsZWFyQ2FudmFzKCk7XG4gIC8vIGNsZWFyIGV2ZW50IOyGoeyLoCA9PiBzb2NrZXRDb250cm9sbGVyLmpzIOyXkOyEnCDsiJjsi6BcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmNsZWFyKTtcbn1cblxuY29uc3QgZmlsbCA9IChjb2xvciA9IG51bGwpID0+IHtcbiAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XG4gIGlmIChjb2xvciAhPT0gbnVsbCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgfVxuICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRDb2xvcjtcbn07XG5cbi8vIGNhbnZhcyDssYTsmrDquLBcbmZ1bmN0aW9uIGZpbGxDYW52YXMoKSB7XG4gIGZpbGwoKTtcbiAgLy8gZmlsbCDsnbTrsqTtirgg7Iah7IugXG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5maWxsLCB7IGNvbG9yOiBjdHguZmlsbFN0eWxlIH0pO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihldmVudCkge1xuICBjb25zdCB0YXJnZXRpbmcgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRpbmcpO1xuICBjb25zdCBnZXRCYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5iYWNrZ3JvdW5kQ29sb3I7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGdldEJhY2tncm91bmRDb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGdldEJhY2tncm91bmRDb2xvcjtcbn1cblxuaWYgKGNhbnZhcykge1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyVGhlQ2FudmFzKTtcbiAgZmlsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsbENhbnZhcyk7XG59XG5cbkFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKChjb2xvcikgPT4ge1xuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZWN0Q29sb3IpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yIH0pID0+IHN0cm9rZVBhdGgoeCwgeSwgY29sb3IpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7IGNvbG9yIH0pID0+IGZpbGwoY29sb3IpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUNsZWFyID0gKCkgPT4gY2xlYXJDYW52YXMoKTtcbiJdfQ==
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

          aSocket.on(events.strokedPath, _paint.handleStrokedPath); //

          aSocket.on(events.filled, _paint.handleFilled); // cleared event 수신 => handleClear 호출

          aSocket.on(events.cleared, _paint.handleClear);
        };

        exports.initSockets = initSockets;
        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU2Nva2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3QiLCJuZXdNc2ciLCJoYW5kbGVOZXdNc2ciLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwiY2xlYXJlZCIsImhhbmRsZUNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBTEE7QUFDQTtBQVdBLElBQUlBLE1BQU0sR0FBRyxJQUFiLEMsQ0FFQTs7QUFDTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQixDLENBRVA7Ozs7O0FBQ08sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsT0FBRDtBQUFBLFNBQWNILE1BQU0sR0FBR0csT0FBdkI7QUFBQSxDQUFyQixDLENBRVA7Ozs7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQUEsZ0JBQ25CRSxNQURtQjtBQUFBLE1BQzlCQyxNQUQ4QixXQUM5QkEsTUFEOEI7QUFFdENKLEVBQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaLENBRnNDLENBR3RDOztBQUNBQSxFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDRSxPQUFsQixFQUEyQkMsNEJBQTNCLEVBSnNDLENBS3RDOztBQUNBTixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDSSxZQUFsQixFQUFnQ0MsK0JBQWhDLEVBTnNDLENBT3RDOztBQUNBUixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDTSxNQUFsQixFQUEwQkMsa0JBQTFCLEVBUnNDLENBU3RDOztBQUNBVixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDUSxTQUFsQixFQUE2QkMsc0JBQTdCLEVBVnNDLENBV3RDOztBQUNBWixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDVSxXQUFsQixFQUErQkMsd0JBQS9CLEVBWnNDLENBYXRDOztBQUNBZCxFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDWSxNQUFsQixFQUEwQkMsbUJBQTFCLEVBZHNDLENBZXRDOztBQUNBaEIsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ2MsT0FBbEIsRUFBMkJDLGtCQUEzQjtBQUNELENBakJNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbnRlbmQgcGFydFxuLy8gQ2xpZW50IHBhcnRcblxuaW1wb3J0IHsgaGFuZGxlTmV3TXNnIH0gZnJvbSBcIi4vY2hhdFwiO1xuaW1wb3J0IHsgaGFuZGxlRGlzY29ubmVjdCwgaGFuZGxlTmV3VXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7XG4gIGhhbmRsZUJlZ2FuUGF0aCxcbiAgaGFuZGxlQ2xlYXIsXG4gIGhhbmRsZUZpbGxlZCxcbiAgaGFuZGxlU3Ryb2tlZFBhdGgsXG59IGZyb20gXCIuL3BhaW50XCI7XG5cbmxldCBzb2NrZXQgPSBudWxsO1xuXG4vLyDshozsvJPsnYQg6rCA7KC47Jik64qUIO2VqOyImFxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuLy8gc29ja2V0IOyXheuNsOydtO2KuCDtlajsiJhcbmV4cG9ydCBjb25zdCB1cGRhdGVTY29rZXQgPSAoYVNvY2tldCkgPT4gKHNvY2tldCA9IGFTb2NrZXQpO1xuXG4vLyDshozsvJMg7IKs7JqpXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSAoYVNvY2tldCkgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xuICB1cGRhdGVTY29rZXQoYVNvY2tldCk7XG4gIC8vIOyDiOuhnOyatCDsnKDsoIDqsIAg65Ok7Ja07Jik64qUIOydtOuypO2KuOyduCBuZXdVc2Vy66W8IO2VreyDgSDrk6Pqs6DsnojsnYxcbiAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gIC8vIOyXsOqysOydtCDrgZ3rgqzsnYTrlYzsnZgg7J2067Kk7Yq466W8IO2VreyDgSDrk6Pqs6Ag7J6I7J2MXG4gIGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdCk7XG4gIC8vIG5ld01zZyDsnbTrsqTtirjrpbwg65Oj64qUIOykkVxuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01zZyk7XG4gIC8vIGJlZ2FuUGF0aCDsnbTrsqTtirgg7IiY7IugXG4gIGFTb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcbiAgLy8gc3Ryb2tlZFBhdGgg7J2067Kk7Yq4IOyImOyLoFxuICBhU29ja2V0Lm9uKGV2ZW50cy5zdHJva2VkUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgpO1xuICAvL1xuICBhU29ja2V0Lm9uKGV2ZW50cy5maWxsZWQsIGhhbmRsZUZpbGxlZCk7XG4gIC8vIGNsZWFyZWQgZXZlbnQg7IiY7IugID0+IGhhbmRsZUNsZWFyIO2YuOy2nFxuICBhU29ja2V0Lm9uKGV2ZW50cy5jbGVhcmVkLCBoYW5kbGVDbGVhcik7XG59O1xuIl19
      },
      { "./chat": 1, "./notifications": 4, "./paint": 5 },
    ],
  },
  {},
  [2]
);
