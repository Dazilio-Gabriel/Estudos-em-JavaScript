produto = [
    {nome: "controle", preco: 20, quantidade: 10},
    {nome: "copo termico", preco: 100, quantidade: 30},
    {nome: "macbook", preco: 6000, quantidade: 3}
];

let totalEstoque = 0;
produtos.forEach(produto => {
    totalEstoque += produto.preco * produto.quantidade;
});
    console.log(totalEstoque)



produtos.forEach(produto => {
    console.log("nome: " + produto.nome + " preco: " + produto.preco + " quantidade: " + produto.quantidade)

});