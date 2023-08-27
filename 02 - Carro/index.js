
let carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado == true) {
            console.log("Esse carro já está ligado");

        } else {
            this.ligado = true;
            console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${carro.velocidade}.`);
        }

    },
    desligar: function () {
        if (this.ligado == true) {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${carro.velocidade}.`);

        } else {
            console.log("Esse carro ja está desligado");

        }

    },
    acelerar: function () {
        if (this.ligado == false) {
            console.log("Não é possível acelerar um carro desligado.");

        } else {
            this.velocidade = this.velocidade + 10;
            console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${carro.velocidade}.`);

        }

    },
    desacelerar: function () {
        if (this.ligado == false) {
            console.log("Não é possível desacelerar um carro desligado.");

        } else {
            this.velocidade = this.velocidade - 10;
            console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${carro.velocidade}.`);
        }

    }
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();