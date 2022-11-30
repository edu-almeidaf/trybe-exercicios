let divisores = 1;
let numero = 71;

for (let divisor = 2; divisor <= numero; divisor += 1){
    if (numero % divisor === 0) {
        divisores += 1;
    }
}

if (divisores === 2) {
    console.log(numero + ' é um número primo.');
} else {
    console.log(numero + ' não é um número primo.');
}