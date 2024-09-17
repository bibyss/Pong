class Bola {
    constructor (ctx, pad, cpu) {
        this.ctx = ctx;
        this.pad = pad;
        this.cpu = cpu;
        this.largura = 20;
        this.altura = 20;
        this.x = (this.ctx.canvas.width/2)-(this.largura/2);
        this.y = (this.ctx.canvas.height/2)-(this.altura/2);
        this.vel = 6;
        //this.dirX = -1;
        //this.dirX = Math.random()*2
        this.dirX = Math.random() > 0.5 ? 1 : -1;
        this.dirY = 0;
        this.movendo = false;

        this.bolaImg = new Image ();
        this.bolaImg.width = 30;
        this.bolaImg.height = 30;
        this.bolaImg.src = "assets/bola.png";
        this.bolaImg.addEventListener('load', () => {
            this.draw();
        });
    }

    startGame () {
        this.movendo = true;
        this.dirY = (Math.random()*10 > 5 ? -1 : 1);
        this.dirX = -1;
    }

    stopGame () {
        this.movendo = false;
        this.x = (this.ctx.canvas.width/2)-(this.largura/2);
        this.y = (this.ctx.canvas.height/2)-(this.altura/2);

        pad.x = 5;
        pad.y = (this.ctx.canvas.height/2)-(this.pad.altura/2);

        cpu.x = this.ctx.canvas.width - cpu.largura - 5;
        cpu.y = (this.ctx.canvas.height/2)-(cpu.altura/2);

        pontoJogador1 = 0;
        pontoJogador2 = 0;
    }

    management () {
        if (this.movendo) {
            this.x += (this.dirX * this.vel);
            this.y += (this.dirY * this.vel);
            if (this.x >= (this.ctx.canvas.width - this.largura)) {
                pontoJogador1++;
                this.dirX = 1;
                this.resetBall();
            }
            if (this.x <= 0) {
                pontoJogador2++;
                this.dirX = -1;
                this.resetBall();
            }
            if (this.y >= (this.ctx.canvas.height - this.altura)) {
                this.dirY *= -1;
            }
            if (this.y <=0) {
                this.dirY = 1;  
            }

            if ((this.x <= this.pad.x + this.pad.largura) && (this.x + this.largura >= this.pad.x) 
            && ((this.y + this.altura >= this.pad.y) && (this.y <= this.pad.altura + this.pad.y))) {
                this.dirX = 1
                this.dirY = ((this.y + (this.altura/2)) - (this.pad.y + (this.pad.altura/2)))/16;
            }

            /*if ((this.x <= this.cpu.x + this.cpu.largura) && (this.x + this.largura >= this.cpu.x) 
            && ((this.y + this.altura >= this.cpu.y) && (this.y <= this.cpu.altura + this.cpu.y))) {
                this.dirX = 1
            }*/
        }
    }

    /*contagem() {
        const tempos = [3000, 2000, 1000];
        const textos = ["3", "2", "1"];
    
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        textos.forEach((texto, index) => {
            setTimeout(() => {
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                this.ctx.font = "70px Arial";
                this.ctx.fillStyle = "black";
                const textWidth = this.ctx.measureText(texto).width;
                const x = (this.ctx.canvas.width - textWidth) / 2;
                const y = this.ctx.canvas.height / 2;
                this.ctx.fillText(texto, x, y);
            }, tempos[index]);
        });
    }*/
                
    resetBall () {
        this.movendo = false;
        setTimeout(() => {
            this.x = (this.ctx.canvas.width/2)-(this.largura/2);
            this.y = (this.ctx.canvas.height/2)-(this.altura/2);
            pad.x = 5;
            pad.y = (this.ctx.canvas.height/2)-(this.pad.altura/2);
            cpu.x = this.ctx.canvas.width-cpu.largura-5 ;
            cpu.y = (this.ctx.canvas.height/2)-(cpu.altura/2);

            /*setTimeout(() => {
                this.startGame();
            }, 1000);*/
        }, 1500);
    }
    
    draw () {
        this.management ();
        this.ctx.fillStyle = "blue";
        this.ctx.drawImage(this.bolaImg, this.x, this.y, this.bolaImg.width, this.bolaImg.height);
    }
}