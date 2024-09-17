class Cpu {
    constructor (ctx, bola) {
        this.ctx = ctx;
        this.bola = bola;
        this.vel = 4;
        this.largura = 40;
        this.altura = 100;
        this.x = this.ctx.canvas.width - this.largura - 5;
        this.y = (this.ctx.canvas.height/2)-(this.altura/2);
        this.meioY = Math.random() * this.altura;

        this.cpuImg = new Image ();
        this.cpuImg.width = 40;
        this.cpuImg.height = 100;
        this.cpuImg.src = "assets/raquete.png";
        this.cpuImg.addEventListener('load', () => {
            this.draw();
        });
    }

    management () {
        if ((this.bola.dirX > 0 ) && (this.bola.x > (this.ctx.canvas.width/2))) {
            if (this.bola.y + (this.bola.altura/2) > this.y + (this.meioY)) {
                this.y += this.vel;
            }
            if (this.bola.y + (this.bola.altura/2) < this.y + (this.meioY)) {
                this.y -= this.vel;
            }
        }       
        else {
            if (this.y > this.inicioY) {
                    this.y -= this.vel
            }
            if (this.y < this.inicioY) {
                this.y += this.vel
            }            
        }
        if ((this.x <= this.bola.x + this.bola.largura) && (this.x + this.largura >= this.bola.x) 
        && ((this.y + this.altura >= this.bola.y) && (this.y <= this.bola.altura + this.bola.y))) {
            this.bola.dirX = -1;
            this.bola.dirY = ((this.bola.y + (this.bola.altura/2)) - (this.y + (this.altura/2)))/16;
            this.meioY = Math.random() * this.altura;            
        }
    }

    draw () {
        this.management ();
        this.ctx.fillStyle = "black";
        this.ctx.drawImage(this.cpuImg, this.x, this.y, this.cpuImg.width, this.cpuImg.height);
    }
}