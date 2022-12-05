function positivoOuNegativo(valor){
    if (valor > 0) {
        return 'positive';
    } else if (valor < 0) {
        return 'negative';
    } else {
        return 'Zero';
    }
}

console.log(positivoOuNegativo(0));