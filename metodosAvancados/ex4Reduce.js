const vetor = [];

for (let i = 0; i < 5; i++) {
    let valor = Number(prompt("digite os numeros para entrarem no array"))
    vetor.push(valor)
};

let soma = vetor.reduce((acumu, valor) => acumu + valor, 0)
console.log(soma);