class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.score = 0;
        /*this.loop();*/
    }

    init() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        /*this.canvas.width = 400;
        this.canvas.height = 400;
        document.body.appendChild(this.canvas);*/
        this.snake = new snake(this);
        this.food = new food(this);
    }

    play() {
        runTime = setInterval(() => this.loop(), 100);
    }

    pause() {
        clearInterval(runTime);
    }

    addScore() {
        this.score++;
    }

    loop() {
        this.update();
        this.draw();
        this.drawScore();
    }

    gameOver(){
        clearInterval(runTime);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.context.fillStyle = '#fd1616'
        this.context.font = '40px Serif';
        this.context.fillText('GAME OVER', 100, 100);
    }

    update() {
        this.snake.update();
        if (this.snake.eat(this.food.x, this.food.y)) {
            this.food.update();
        }
        /*        this.draw();*/
    }

    drawScore(){
        document.getElementById('score').innerText = this.score;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.snake.draw();
        this.food.draw();
    }
}

let g = new game();
let runTime;