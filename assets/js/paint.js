// Painting game page

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
let filling = false;

function handleMove(event) {
  let x = event.offsetX;
  let y = event.offsetY;
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
  clearBtn.addEventListener("click", clearCanvas);
  fillBtn.addEventListener("click", fillCanvas);
}

Array.from(colors).forEach((color) => {
  color.addEventListener("click", selectColor);
});
