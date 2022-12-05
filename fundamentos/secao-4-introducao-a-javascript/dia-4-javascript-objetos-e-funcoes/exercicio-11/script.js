function maiorIndice(arrayNumeros){
    let indice = 0;

    for (let index in arrayNumeros) {
        
        if (arrayNumeros[index] > arrayNumeros[indice]){
            indice = index;
        }
        
    }

    return indice;
}

console.log(maiorIndice([230, 3, 60, 7, 10, 100]));



function menorIndice(numeros){
    let menorIndice = 0;

    for (let index1 in numeros){
        if (numeros[menorIndice] > numeros[index1]) {
            menorIndice = index1;
        }
    }

    return menorIndice;
}

console.log(menorIndice([2, 4, -6, 7, 10, 0, -3]));