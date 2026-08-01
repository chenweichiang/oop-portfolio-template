// 在這裡寫（或貼上你工作流產出的）p5.js 程式碼
function setup() {
  createCanvas(600, 600)
}

function draw() {
  background(253, 252, 249)
  circle(width / 2, height / 2, 100 + 20 * sin(frameCount * 0.05))
}
