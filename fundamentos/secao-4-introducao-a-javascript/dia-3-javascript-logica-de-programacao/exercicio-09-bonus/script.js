let n = 5;
let middle = (n + 1) / 2;
let left = middle;
let right = middle;
let symbol = '*';

if (n % 2 === 1 && n > 0){
    for (let line = 1; line <= middle; line += 1){
        let outputLine = '';
        for (let col = 1; col <= n; col += 1){
            if (col == left || col == right || line == middle) {
                outputLine += symbol;
            } else {
                outputLine += ' ';
            }
        }
        left -= 1;
        right += 1;
        console.log(outputLine);
    }
} else {
    console.log('Insira um número ímpar e maior do que zero');
}