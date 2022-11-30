let n = 7;
let symbol = '*';
let line = '';
let meio = (n + 1) / 2;
let left = meio;
let right = meio

if (n > 1) {
    for (let indexLine = 0; indexLine <= meio; indexLine += 1){
        for(let indexColumn = 0; indexColumn <= n; indexColumn += 1) {
            if (indexColumn > left && indexColumn < right){
                line += symbol;
            } else {
                line += ' ';
            }
        }
        console.log(line);
        line = '';
        right += 1;
        left -= 1;
    }
} else {
    console.log('Insira um valor maior do que 1');
}