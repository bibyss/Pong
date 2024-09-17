class Player {
    constructor (ctx, keyboard) {
        this.ctx = ctx;
        this.keyboard = keyboard;
        this.x = 0;
        this.y = 0;
        this.vel = 5;

        this.menina = new Image ();
        this.menina.src = "assets/menina/idle/Idle (1).png";
        this.menina.addEventListener ('load', () => {
                this.draw();
            }
        )
    }

    management () {
        if (this.keyboard.cima) {
            this.y -= this.vel;
        }
        if (this.y < 0) {
            this.y += this.vel;
        }
        if (this.keyboard.baixo) {
            this.y += this.vel;
        }
        if (this.y > 545) {
            this.y -= this.vel;
        }
        if (this.keyboard.esquerda) {
            this.x -= this.vel;
        }
        if (this.x < 0) {
            this.x += this.vel;
        }
        if (this.keyboard.direita) {
            this.x += this.vel;
        }
        if (this.x > 745) {
            this.x -= this.vel;
        }
    }

    draw () {
        this.management ();
        this.ctx.drawImage (this.menina, this.x, this.y, 50, 50);
    }
}