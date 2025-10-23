let numero = [];

for (let i= 0 ; i < 3; i++) {
    let valor = Number(prompt("digite o numero"))
    numero.push(valor);
}

for (let i = 0; numero.length; i++) {
    console.log(numero[i])
}