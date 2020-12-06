class snake {
    constructor(game) {
        this.game = game;
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.dx = this.grid;
        this.dy = 0;
        this.cell = [];
        this.maxCells = 1;
    }
    update() {
        if (this.endGame()){
            this.x += this.dx;
            this.y += this.dy;
        }
        if (this.x >= this.game.canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = this.game.canvas.width;
        }
        if (this.y >= this.game.canvas.height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = this.game.canvas.height;
        }
        this.cell.unshift({x: this.x, y: this.y});
        if (this.cell.length > this.maxCells) {
            this.cell.pop();
        }
        this.catchHandel();
    }
    draw() {
        for (let i = 0; i < this.cell.length; i++) {
            if (i == 0){
                this.game.context.fillStyle = '#000000';
                this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
            }
            else{
                this.game.context.fillStyle = '#8e8e8e';
                this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
            }
        }
    }
    catchHandel() {
        document.addEventListener('keydown', (e) => {
            if (e.which == 37 && this.dx == 0) {
                this.dx = -this.grid;
                this.dy = 0;
            } else if (e.which == 38 && this.dy == 0) {
                this.dx = 0;
                this.dy = -this.grid;
            } else if (e.which == 39 && this.dx == 0) {
                this.dx = this.grid;
                this.dy = 0;
            } else if (e.which == 40 && this.dy == 0) {
                this.dx = 0
                this.dy = this.grid;
            }
        });
    }
    eat(x, y) {
        if (this.x == x && this.y == y) {
            this.maxCells++;
            g.addScore();
            return true;
        }
        return false;
    }
    die(){
        g.gameOver();
    }
    endGame() {
        for (let i = 1; i < this.cell.length; i++) {
            if (this.x == this.cell[i].x && this.y == this.cell[i].y) {
                setTimeout(this.die, 1000);
                return false;
            }
        }
        return true;
    }
}