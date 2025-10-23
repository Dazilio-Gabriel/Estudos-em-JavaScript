let frutas = [];

for (let i = 0; i < 5; i++){
    let valor = prompt("digite o nome de uma fruta") 
    frutas.push(valor)
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

console.log(frutas)