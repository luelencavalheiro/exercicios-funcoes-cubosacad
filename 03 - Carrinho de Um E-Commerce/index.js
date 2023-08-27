const carrinho = {
    nomeDoCliente: "Luelen Cavalheiro",
    produtos: [
        {
            id: 1,
            nome: "Blusinha do RBD",
            qtd: 3,
            precoUnit: 3000 // em centavos
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000 // em centavos
        }
    ],
    imprimirResumo: function () {
        quantidade = 0;
        precoTotal = 0;
        for (let item of carrinho.produtos) {
            precoTotal = precoTotal + ((item.precoUnit * item.qtd) / 100);
            quantidade = quantidade + item.qtd;
        }

        console.log(carrinho.nomeDoCliente);
        console.log(`${quantidade} itens`);
        console.log(`R$${precoTotal.toFixed(2)} reais`);
    },
    addProduto: function (produto) {
        let temProdutoNoCarrinho = false;

        for (let item of carrinho.produtos) {
            if (produto.id === item.id) {
                item.qtd = produto.qtd + item.qtd;
                temProdutoNoCarrinho = true;
            }
        }

        if (temProdutoNoCarrinho === false) {
            carrinho.produtos.push(produto);
        }
    }

};



const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
