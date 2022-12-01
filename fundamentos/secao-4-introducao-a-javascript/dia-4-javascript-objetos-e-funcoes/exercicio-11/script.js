function maiorIndice(arrayNumeros){
    let indice = 0;

    for (index in arrayNumeros) {
        
        if (arrayNumeros[index] > arrayNumeros[indice]){
            indice = index;
        }
        
    }

    return indice;
}

console.log(maiorIndice([23, 3, 60, 7, 10, 100]));