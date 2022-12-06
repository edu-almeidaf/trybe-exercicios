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



const minhasSkills = func => {
    const skills = ['Javascript', 'HTML', 'CSS'];

    let resultado = `
    ${func}
    
    Minhas três principais habilidades são:`;

    for (let index = 0; index < skills.length; index += 1) {
        resultado = `${resultado}
        - ${skills[index]}`;
    }

return resultado;

}

console.log(minhasSkills(substituaX('Eduardo')));