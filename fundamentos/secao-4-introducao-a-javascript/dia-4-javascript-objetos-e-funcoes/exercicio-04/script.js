function maiorDeDoisNumeros(primeiroNum, segundoNum){
    if (primeiroNum > segundoNum){
        return primeiroNum + ' é maior do que ' + segundoNum;
    } else {
        return segundoNum + ' é maior do que ' + primeiroNum;
    }
}

console.log(maiorDeDoisNumeros(5, 2));