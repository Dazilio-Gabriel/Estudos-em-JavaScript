const vetor = [];

let tamanho = prompt("digite o tamanho do vetor");
tamanho = +tamanho;

for (let i = 0; i < tamanho; i++) {
    let vetorAtualizado = Number(prompt("digite os numeros do vetor posicao: " + i))
    vetor.push(vetorAtualizado)
}

let vetorDobro = vetor.map( num => num * num)

vetorDobro.forEach(vetorDobro => {
    console.log(vetorDobro)
});

let vetorFiltrado = vetor.filter(num => num > 5)
console.log("vetor filtrado\n")

vetorFiltrado.forEach(vetorFiltrado => {
    console.log(vetorFiltrado);
})

let soma = vetor.reduce((acumu, valor) => acumu + valor, 0);
console.log(soma);