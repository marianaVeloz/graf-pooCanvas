// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Clase Ball (Pelota)
class Ball {

    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw() { //dibujo de la pelota
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    move() { //movimiento de pelota con velocidad
        this.x += this.speedX;
        this.y += this.speedY;

        // Colisión con la parte superior e inferior
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.speedY = -this.speedY;
        }
    }

    reset() { //vuelve a iniciar en el centro la pelota
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speedX = -this.speedX; // Cambia dirección al resetear
    }
}

class Ball2 {

    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw2() { //dibujo de la pelota
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.closePath();
    }

    move() { //movimiento de pelota con velocidad
        this.x += this.speedX;
        this.y += this.speedY;

        // Colisión con la parte superior e inferior
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.speedY = -this.speedY;
        }
    }

    reset() { //vuelve a iniciar en el centro la pelota
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speedX = -this.speedX; // Cambia dirección al resetear
    }
}

class Ball3 {

    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw3() { //dibujo de la pelota
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }

    move() { //movimiento de pelota con velocidad
        this.x += this.speedX;
        this.y += this.speedY;

        // Colisión con la parte superior e inferior
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.speedY = -this.speedY;
        }
    }

    reset() { //vuelve a iniciar en el centro la pelota
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speedX = -this.speedX; // Cambia dirección al resetear
    }
}

class Ball4 {

    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw4() { //dibujo de la pelota
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'pink';
        ctx.fill();
        ctx.closePath();
    }

    move() { //movimiento de pelota con velocidad
        this.x += this.speedX;
        this.y += this.speedY;

        // Colisión con la parte superior e inferior
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.speedY = -this.speedY;
        }
    }

    reset() { //vuelve a iniciar en el centro la pelota
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speedX = -this.speedX; // Cambia dirección al resetear
    }
}

class Ball5 {

    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw5() { //dibujo de la pelota
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'purple';
        ctx.fill();
        ctx.closePath();
    }

    move() { //movimiento de pelota con velocidad
        this.x += this.speedX;
        this.y += this.speedY;

        // Colisión con la parte superior e inferior
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
            this.speedY = -this.speedY;
        }
    }

    reset() { //vuelve a iniciar en el centro la pelota
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.speedX = -this.speedX; // Cambia dirección al resetear
    }
}

// Clase Paddle (Paleta)
class Paddle {

    constructor(x, y, width, height, isPlayerControlled = false) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isPlayerControlled = isPlayerControlled;
        this.speed = 5;
    }

    drawJ() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    drawA() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(direction) {
        if (direction === 'up' && this.y > 0) {
            this.y -= this.speed; //se mueve para arriba
        } else if (direction === 'down' && this.y + this.height < canvas.height) {
            this.y += this.speed; //se mueve para abajo
        }
    }

    // Movimiento de la paleta automática (IA)
    autoMove(ball) {
        if (ball.y < this.y + this.height / 2) {
            this.y -= this.speed;
        } else if (ball.y > this.y + this.height / 2) {
            this.y += this.speed;
        }
    }

    autoMove(ball2) {
        if (ball2.y < this.y + this.height / 2) {
            this.y -= this.speed;
        } else if (ball2.y > this.y + this.height / 2) {
            this.y += this.speed;
        }
    }

    autoMove(ball3) {
        if (ball3.y < this.y + this.height / 2) {
            this.y -= this.speed;
        } else if (ball3.y > this.y + this.height / 2) {
            this.y += this.speed;
        }
    }

    autoMove(ball4) {
        if (ball4.y < this.y + this.height / 2) {
            this.y -= this.speed;
        } else if (ball4.y > this.y + this.height / 2) {
            this.y += this.speed;
        }
    }

    autoMove(ball5) {
        if (ball5.y < this.y + this.height / 2) {
            this.y -= this.speed;
        } else if (ball5.y > this.y + this.height / 2) {
            this.y += this.speed;
        }
    }
}

// Clase Game (Controla el juego)
class Game {

    constructor() {
        this.ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 2.5, 2.5);
        this.ball2 = new Ball2(canvas.width / 2, canvas.height / 2, 5, 3.5, 3.5);
        this.ball3 = new Ball3(canvas.width / 2, canvas.height / 2, 9, 3.7, 3.7);
        this.ball4 = new Ball4(canvas.width / 2, canvas.height / 2, 12, 1.5, 1.5);
        this.ball5 = new Ball5(canvas.width / 2, canvas.height / 2, 15, 3.8, 3.8);
        this.paddle1 = new Paddle(0, canvas.height / 2 - 50, 10, 200, true); // jugador
        this.paddle2 = new Paddle(canvas.width - 10, canvas.height / 2 - 50, 10, 100); // CPU
        this.keys = {}; // Para capturar las teclas
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ball.draw();
        this.ball2.draw2();
        this.ball3.draw3();
        this.ball4.draw4();
        this.ball5.draw5();
        this.paddle1.drawJ();
        this.paddle2.drawA();
    }

    update() {
        this.ball.move();
        this.ball2.move();
        this.ball3.move();
        this.ball4.move();
        this.ball5.move();

        // Movimiento de la paleta 1 (Jugador) controlado por teclas
        if (this.keys['ArrowUp']) {
            this.paddle1.move('up');
        }
        if (this.keys['ArrowDown']) {
            this.paddle1.move('down');
        }

        // Movimiento de la paleta 2 (Controlada por IA)
        this.paddle2.autoMove(this.ball);

        // Colisiones con las paletas
        if (this.ball.x - this.ball.radius <= this.paddle1.x + this.paddle1.width &&
            this.ball.y >= this.paddle1.y && this.ball.y <= this.paddle1.y + this.paddle1.height) {
            this.ball.speedX = -this.ball.speedX;
        }
        if (this.ball.x + this.ball.radius >= this.paddle2.x &&
            this.ball.y >= this.paddle2.y && this.ball.y <= this.paddle2.y + this.paddle2.height) {
            this.ball.speedX = -this.ball.speedX;
        }

        if (this.ball2.x - this.ball2.radius <= this.paddle1.x + this.paddle1.width &&
            this.ball2.y >= this.paddle1.y && this.ball2.y <= this.paddle1.y + this.paddle1.height) {
            this.ball2.speedX = -this.ball2.speedX;
        }
        if (this.ball2.x + this.ball2.radius >= this.paddle2.x &&
            this.ball2.y >= this.paddle2.y && this.ball2.y <= this.paddle2.y + this.paddle2.height) {
            this.ball2.speedX = -this.ball2.speedX;
        }

        if (this.ball3.x - this.ball3.radius <= this.paddle1.x + this.paddle1.width &&
            this.ball3.y >= this.paddle1.y && this.ball3.y <= this.paddle1.y + this.paddle1.height) {
            this.ball3.speedX = -this.ball3.speedX;
        }
        if (this.ball3.x + this.ball3.radius >= this.paddle2.x &&
            this.ball3.y >= this.paddle2.y && this.ball3.y <= this.paddle2.y + this.paddle2.height) {
            this.ball3.speedX = -this.ball3.speedX;
        }

        if (this.ball4.x - this.ball4.radius <= this.paddle1.x + this.paddle1.width &&
            this.ball4.y >= this.paddle1.y && this.ball4.y <= this.paddle1.y + this.paddle1.height) {
            this.ball4.speedX = -this.ball4.speedX;
        }
        if (this.ball4.x + this.ball4.radius >= this.paddle2.x &&
            this.ball4.y >= this.paddle2.y && this.ball4.y <= this.paddle2.y + this.paddle2.height) {
            this.ball4.speedX = -this.ball4.speedX;
        }

        if (this.ball5.x - this.ball5.radius <= this.paddle1.x + this.paddle1.width &&
            this.ball5.y >= this.paddle1.y && this.ball5.y <= this.paddle1.y + this.paddle1.height) {
            this.ball5.speedX = -this.ball5.speedX;
        }
        if (this.ball5.x + this.ball5.radius >= this.paddle2.x &&
            this.ball5.y >= this.paddle2.y && this.ball5.y <= this.paddle2.y + this.paddle2.height) {
            this.ball5.speedX = -this.ball5.speedX;
        }

        // Detectar cuando la pelota sale de los bordes (punto marcado)
        if (this.ball.x - this.ball.radius <= 0 || this.ball.x + this.ball.radius >= canvas.width) {
            this.ball.reset();
        }

        if (this.ball2.x - this.ball2.radius <= 0 || this.ball2.x + this.ball2.radius >= canvas.width) {
            this.ball2.reset();
        }

        if (this.ball3.x - this.ball3.radius <= 0 || this.ball3.x + this.ball3.radius >= canvas.width) {
            this.ball3.reset();
        }

        if (this.ball4.x - this.ball4.radius <= 0 || this.ball4.x + this.ball4.radius >= canvas.width) {
            this.ball4.reset();
        }

        if (this.ball5.x - this.ball5.radius <= 0 || this.ball5.x + this.ball5.radius >= canvas.width) {
            this.ball5.reset();
        }
    }

    // Captura de teclas para el control de la paleta
    handleInput() {
        window.addEventListener('keydown', (event) => {
            this.keys[event.key] = true;
        });
        window.addEventListener('keyup', (event) => {
            this.keys[event.key] = false;
        });
    }

    run() {
        this.handleInput();
        const gameLoop = () => {
            this.update();
            this.draw();
            requestAnimationFrame(gameLoop);
        };
        gameLoop();
    }
}

// Crear instancia del juego y ejecutarlo
const game = new Game();
game.run();