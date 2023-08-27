const contaBancaria = {
    nome: "Luelen",
    saldo: 0,
    historicos: [

        {
            tipo: "Depósito",
            valor: 10000
        },
        {
            tipo: "Saque",
            valor: 5000
        }

    ],
    depositar: function (valor) {
        valor = valor / 100;
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depositar",
            valor
        });
        console.log(`Deposito de R$${valor} realizado para o cliente: ${contaBancaria.nome}`);
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            valor = valor / 100;
            this.saldo -= valor;
            this.historicos.push({
                tipo: "Sacar",
                valor
            });
            console.log(`Saque de R$${valor} realizado para o cliente: ${this.nome}`);
        }

    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo Atual ${this.saldo}`);
        console.log(`Histórico`);
        for (let historico of this.historicos) {
            console.log(historico);
        }
        console.log(`Depósito de R$${this.depositar}`);
        console.log(`Saque de R$${this.saque}`);
    }
};


console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());