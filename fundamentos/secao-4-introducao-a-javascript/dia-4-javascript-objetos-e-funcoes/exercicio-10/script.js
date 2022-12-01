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



//Verificando a primeira posição com a última

function verificaPalindromo(word) {
    for(index1 in word) {
      if(word[index1] != word[(word.length - 1) - index1]) {
        return false;
      }
    }
    return true;
  }


//Utilizando split, reverse e join

function verificaPalindrome(word) {
    newWord = word.split('').reverse().join('');

    if (newWord === word){
        return true;
    }

    return false;
}

console.log(verificaPalindrome('arara'));