/**** SETUP CODE ****/

// Call the init function when the HTML window loads
window.onload = init;

function init() {
  // Init function that sets up our canvas. 
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  // Start the first frame request to begin the game loop
  window.requestAnimationFrame(gameLoop);

}

/**** OBJECT CREATION FUNCTIONS ****/

// Write the circle object function here

function circle(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
}

// Write the createCircle function here. 

const objs = [];
let currentCircle = 0;


function createCircle() {

  const color = randomColour();

  objs[currentCircle] = new circle(randomInteger(0,480), randomInteger(0,480), color)

  ctx.beginPath();
  ctx.arc(objs[currentCircle].x, objs[currentCircle].y, 10, 0, Math.PI * 2);
  ctx.fillStyle = objs[currentCircle].color;
  ctx.fill();

  currentCircle++
}

// Write the randomInteger function here. 

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColour() {
  const r = randomInteger(0, 255);
  const g = randomInteger(0, 255);
  const b = randomInteger(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}


/**** GAMELOOP ****/

function gameLoop(timestamp) {

  // Call the createCircle function here.
  createCircle();

  // This causes the game to loop every frame (Do not change this)
  window.requestAnimationFrame(gameLoop);
}



