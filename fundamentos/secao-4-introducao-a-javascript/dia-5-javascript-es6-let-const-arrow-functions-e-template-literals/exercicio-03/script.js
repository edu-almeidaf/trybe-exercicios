let statusMotor = 'desligado';

const ligarDesligar = () => statusMotor === 'desligado' ? statusMotor = 'ligado' : statusMotor = 'desligado';

console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);




const circleArea = raio => {
    const pi = 3.14;

    const area = pi * (raio ** 2);

    return `Essa é a área do círculo: ${area}.`;
}

console.log(circleArea(5));




const longestWord = frase => {
    const fraseArray = frase.split(' ');
    let maxlength = 0;
    let maiorPalavra = '';
    
    
    for (const word of fraseArray) {
        if (word.length > maxlength) {
            maxlength = word.length;
            maiorPalavra = word;
        }
    }

    return maiorPalavra;

}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));



//Utilizando sort:

const maiorPalavradoArray = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));