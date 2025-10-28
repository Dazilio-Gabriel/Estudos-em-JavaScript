const vetor = [];

for (let i = 0; i < 5; i++) {
    let valor = Number(prompt("digite os numeros para entrarem no array"))
    vetor.push(valor)
};

const maiores = vetor.filter(num => num > 10)

maiores.forEach(maiores => {
    console.log(maiores)
});