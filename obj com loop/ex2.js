produtos = [
    {nome: "macbook", preco: 6000 , quantidade: 2 , categoria: "laptop"},
    {nome: "apple watch", preco: 2000 , quantidade: 7 , categoria: "relogio"},
    {nome: "iphone", preco: 13000 , quantidade: 1 , categoria: "celular"},
    {nome: "mac mini", preco: 4500 , quantidade: 4 , categoria: "laptop"},
    {nome: "ipad", preco: 3000 , quantidade: 9 , categoria: "tablet"}
];

let controle = "laptop";
let vetorMesmaCategoria = [];

//produtos mesma categ
produtos.forEach(produtos => {
    if (produtos.categoria === controle){
        vetorMesmaCategoria.push(produtos);
    }
});
    console.log("os produtos da mesma categoria: ", vetorMesmaCategoria);

    //todos os prods
    produtos.forEach(produtos => {
        console.log("nome: " + produtos.nome + " preco: " + produtos.preco + " quantidade: " + produtos.quantidade + " categoria: " + produtos.categoria);
    });

let totalEstoque = 0;

//quantidade * preco
produtos.forEach(produtos => {
    totalEstoque += produtos.preco * produtos.quantidade;
});

console.log(totalEstoque);