let jogos = [
  { nome: "The Legend of Zelda", categoria: "aventura", preco: 350, quantidade: 4 },
  { nome: "Call of Duty", categoria: "acao", preco: 250, quantidade: 7 },
  { nome: "FIFA 24", categoria: "esporte", preco: 300, quantidade: 0 },
  { nome: "Mario Kart", categoria: "corrida", preco: 280, quantidade: 3 },
  { nome: "Forza horizon 5", categoria: "corrida", preco: 300, quantidade: 2 }
];

jogos.forEach(jogos => {
    console.log("nome: " + jogos.nome + " | categoria: " + jogos.categoria + " | preco: " + jogos.preco + " | quantidade: " + jogos.quantidade);
});

let jogosFiltrados = jogos.filter(jogos => jogos.categoria === "corrida");
jogosFiltrados.forEach(jogosFiltrados => {
    console.log("jogos com a categoria corrida: " + jogosFiltrados)
});

let valoTotal = 0;
jogos.forEach(jogos => {
    valoTotal += jogos.preco * jogos.quantidade;
});
    console.log("valor total: " + valoTotal);

    let controle = 0;
    let novoValor = 0;
jogos.forEach(jogos => {
    if (jogos.categoria === "corrida") {
        jogo.preco *= 1.10;
    }
})
jogos.forEach(jogos => {
console.log("Jogos com o preco atualizado" + "nome: " + jogos.nome + " | categoria: " + jogos.categoria + " | preco: " + jogos.preco + " | quantidade: " + jogos.quantidade);})

let jogoNovo = { nome: "lego movie", categoria: "aventura", preco: 150, quantidade: 0 }
;

jogos.push(jogoNovo);

jogos.forEach(jogos => {
console.log("novo jogo adicionado" + "nome: " + jogos.nome + " | categoria: " + jogos.categoria + " | preco: " + jogos.preco + " | quantidade: " + jogos.quantidade);})

jogos = jogos.filter(jogo => jogo.quantidade > 0);

console.log(jogos);