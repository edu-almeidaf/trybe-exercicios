let maiorNumeroPrimo = 0;

for (let numero = 2; numero <= 50; numero += 1) {
    let numeroPrimo = true;

    for (let divisor = 2; divisor < numero; divisor += 1) {
        if(numero % divisor === 0) {
            numeroPrimo = false;
        }
    }

    if (numeroPrimo) {
        maiorNumeroPrimo = numero;
    }
}

console.log(maiorNumeroPrimo);