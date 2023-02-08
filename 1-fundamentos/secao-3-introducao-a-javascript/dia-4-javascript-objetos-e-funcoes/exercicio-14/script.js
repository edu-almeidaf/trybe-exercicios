function somatorioNumeros(numero){
    let resultado = 0;

    for (let index = 1; index <= numero; index += 1) {
        resultado += index;
    }

    return resultado;
}

console.log(somatorioNumeros(5));