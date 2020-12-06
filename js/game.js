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
        runTime = setInterval(() => this.loop(), 60);
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