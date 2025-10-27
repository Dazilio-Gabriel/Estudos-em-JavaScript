const vetor = [];
let controle = 4;

for (let i = 0; i < controle; i++){
    let valor = Number(prompt("digite 4 numeros para entrar no vetor e a gente visualizar o valor deles ao quadrado"))
    vetor.push(valor);
}

const vetorDobrado = vetor.map(num => num * num);

vetorDobrado.forEach(vetorDobrado =>
    console.log(vetorDobrado));