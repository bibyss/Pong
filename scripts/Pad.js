class Pad {
    constructor (ctx, keyboard) {
        this.ctx = ctx;
        this.keyboard = keyboard;
        this.x = 5;
        this.vel = 5;
        this.largura = 40;
        this.altura = 100;
        this.y = (this.ctx.canvas.height/2)-(this.altura/2);

        this.padImg = new Image ();
        this.padImg.width = 40;
        this.padImg.height = 100;
        this.padImg.src = "assets/raquete.png";
        this.padImg.addEventListener('load', () => {
            this.draw();
        });
    }

    management () {
        if (this.keyboard.cima) {
            if (this.y > 0 && this.y + 5) {
                this.y -= this.vel;
            }
        }    
        if (this.keyboard.baixo) {
            if (this.y<this.ctx.canvas.height-this.altura - 5) {
                this.y += this.vel;
            }
        }
    }

    draw () {
        this.management ();
        this.ctx.fillStyle = "black";
        this.ctx.drawImage(this.padImg, this.x, this.y, this.padImg.width, this.padImg.height);
    }
}