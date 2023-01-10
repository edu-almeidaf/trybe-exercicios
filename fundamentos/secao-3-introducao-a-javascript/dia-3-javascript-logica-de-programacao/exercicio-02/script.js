let word = 'eduardo';
let newWord = '';

for (index = word.length - 1; index >= 0; index -= 1){
    newWord += word[index];
}

console.log(newWord);