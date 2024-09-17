class Placar {
    constructor (ctx) {
        this.ctx = ctx
        this.direita = this.ctx.canvas.width;
        this.margem = 10;
        this.margemDireita = 50;
        this.largura = 100;
    }

    resetScore () {
        bola.movendo = false;
        pontoJogador1 = 0;
        pontoJogador2 = 0;
        bola.x = (this.ctx.canvas.width/2)-(bola.largura/2);
        bola.y = (this.ctx.canvas.height/2)-(bola.altura/2);
        pad.x = 5
        pad.y = (this.ctx.canvas.height/2)-(pad.altura/2);
        cpu.x = (this.ctx.canvas.width - cpu.largura - 5);
        cpu.y = (this.ctx.canvas.height/2)-(cpu.altura/2);
        setTimeout(() => {
            textWinner = ""
        }, 2000);
    }

    draw () {
        this.ctx.font = "70px arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(pontoJogador1, this.margem, this.margem + 70, this.largura);
        this.ctx.fillText(pontoJogador2, this.direita - this.margemDireita, this.margem + 70, this.largura);
    }
}