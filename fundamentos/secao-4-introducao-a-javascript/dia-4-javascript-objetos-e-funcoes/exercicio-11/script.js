function maiorIndice(arrayNumeros){
    let indice = 0;

    for (index = 0; index < arrayNumeros.length; index += 1) {
        for (index1 = 0; index1 < arrayNumeros.length; index1 += 1){
            if (arrayNumeros[index1] > arrayNumeros[index]){
                indice = index1;
            }
        }
    }

    return indice;
}

console.log(maiorIndice([23, 3, 6, 7, 10, 1]));