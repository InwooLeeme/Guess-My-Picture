// Painting game page
// Front end
import { getSocket } from "./sockets";
const canvas = document.getElementById("jsCanvas");
const fillBtn = document.querySelector("#jsMode:nth-child(1)");
const clearBtn = document.querySelector("#jsMode:nth-child(2)");
const colors = document.getElementsByClassName("color");
const ctx = canvas.getContext("2d");

const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.lineWidth = 2.5;

let pressed = false;

// 다른 함수에도 사용하기 위해서 함수화 하였음 (beginPath and strokedPath)
const beginPath = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

const strokePath = (x, y, color = null) => {
  let currentColor = ctx.strokeStyle;
  if (color !== null) {
    ctx.strokeStyle = color;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

function handleMove(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  if (!pressed) {
    // 켄버스 위에서 마우스가 눌러졌을 때
    beginPath(x, y);
    // 실시간으로 beginPath 이벤트 발생
    getSocket().emit(window.events.beginPath, { x, y });
  } else {
    // 캔버스 위에서 마우스 클릭을 멈췄을 때
    strokePath(x, y);
    // 실시간으로 strokePath 이벤트 발생
    // color를 보내줌으로써 그리고 있는 색상 정보까지 포함
    getSocket().emit(window.events.strokePath, {
      x,
      y,
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
  clearCanvas();
  // clear event 송신 => socketController.js 에서 수신
  getSocket().emit(window.events.clear);
}

const fill = (color = null) => {
  let currentColor = ctx.fillStyle;
  if (color !== null) {
    ctx.fillStyle = color;
  }
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

// canvas 채우기
function fillCanvas() {
  fill();
  // fill 이벤트 송신
  getSocket().emit(window.events.fill, { color: ctx.fillStyle });
}

function selectColor(event) {
  const targeting = event.target;
  const color = getComputedStyle(targeting);
  const getBackgroundColor = color.backgroundColor;
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

Array.from(colors).forEach((color) => {
  color.addEventListener("click", selectColor);
});

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y, color }) => strokePath(x, y, color);
export const handleFilled = ({ color }) => fill(color);
export const handleClear = () => clearCanvas();
