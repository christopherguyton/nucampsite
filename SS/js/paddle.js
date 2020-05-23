export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 30;
        this.maxSpeed = 5;
        this.speed = 0;
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        }
    }
    //first two parameters are position, second two are size
    draw(ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }
    moveRight(){
        this.speed = this.maxSpeed;
    }
    

    stop(){
        this.speed = 0;
    }

update(deltaTime) {

    
    this.position.x += this.speed;


    if(this.position.x < 0) this.position.x = 0;
    if(this.position.x > 650) this.position.x = 650;
    }
}
    
