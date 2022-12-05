//Forma 1:

// function verificaFimPalavra(word, ending) {
//     word = word.split('');
//     ending = ending.split('');

//     let control = true;

//     for (let index = 0; index < ending.length; index += 1) {
//         if (word[word.length - ending.length + index] !== ending[index]) {
//             control = false;
//         }
//     }

//     return control;
// }

// console.log(verificaFimPalavra('Trybe', 'be'));


//Forma 2:

function verificaFimPalavra(word, ending) {
    word = word.split('').reverse().join('');
    ending = ending.split('').reverse().join('');

    let control = true;

    for (let index = 0; index < ending.length; index += 1) {
        if (word[index] !== ending[index]) {
            control = false;
        }
    }

    return control;
}

console.log(verificaFimPalavra('Trybe', 'be'));
