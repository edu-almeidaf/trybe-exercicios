let array = ['java', 'javascript', 'python', 'html', 'css'];
maiorPalavra = array[0];
menorPalavra = array[0];

for (index = 0; index < array.length; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index];
    }

    if (menorPalavra.length > array[index].length) {
        menorPalavra = array[index];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);