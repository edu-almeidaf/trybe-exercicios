function maiorDeTresNumeros(primeiroNum, segundoNum, terceiroNum){
    if (primeiroNum > segundoNum && primeiroNum > terceiroNum){
        return primeiroNum + ' é maior do que ' + segundoNum + ' e que ' + terceiroNum;

    } else if (segundoNum > primeiroNum && segundoNum > terceiroNum){
        return segundoNum + ' é maior do que ' + primeiroNum + ' e que ' + terceiroNum;

    } else{
        return terceiroNum + ' é maior do que ' + primeiroNum + ' e que ' + segundoNum;
    }
}

console.log(maiorDeTresNumeros(10, 8, 7));