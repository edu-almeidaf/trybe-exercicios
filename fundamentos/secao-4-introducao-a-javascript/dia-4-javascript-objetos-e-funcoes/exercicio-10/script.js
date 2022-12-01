function verificaPalindrome(palavra) {
    novaPalavra = '';
    for (index = palavra.length-1; index >= 0; index -=1){
        novaPalavra += palavra[index];
    }

    if (novaPalavra === palavra){
        return true;
    }

    return false;
}

console.log(verificaPalindrome('arara'));