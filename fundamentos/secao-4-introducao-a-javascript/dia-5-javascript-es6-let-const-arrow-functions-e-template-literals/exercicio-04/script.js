const substituaX = nome => {
    const frase = 'Tryber x aqui';

    const arrayFrase = frase.split(' ');

    for (let index = 0; index < arrayFrase.length; index += 1) {
        if (arrayFrase[index] === 'x') {
            arrayFrase[index] = nome;
        }
    }

    return arrayFrase.join(' ');
}

console.log(substituaX('Eduardo '));