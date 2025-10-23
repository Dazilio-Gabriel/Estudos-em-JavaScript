let numero = [];

for (let i = 0; i < 3; i++) {
    let valor = Number(prompt("digite o numeros para printar apenas os pares"))

    if (valor % 2 === 0) {
        numero.push(valor)
    }

}

for (let i = 0; i < 3; i++) {
    console.log(numero[i])
}