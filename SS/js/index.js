import Paddle from '/js/paddle.js';
import InputHandler from '/js/input.js';
import Ball from '/js/ball.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

//Width / Height is the last two values
//X / Y axis are the first two values

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball();
new InputHandler(paddle);


paddle.draw(ctx);



let lastTime = 0;

function gameLoop(timestamp) {

    ball.update(deltaTime);
    ball.draw(ctx);
    
    paddle.update(deltaTime);
    paddle.draw(ctx);


//Draw and Update within GameLoop
let deltaTime = timestamp - lastTime;
lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);

