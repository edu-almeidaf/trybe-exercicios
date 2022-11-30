let n = 6;
let symbol = '*';
let line = '';
let position = n;

if (n > 1) {
    for (let indexLine = 0; indexLine < n; indexLine += 1){
        for(indexColumn = 0; indexColumn <= n; indexColumn += 1) {
            if (indexColumn < position){
                line += ' ';
            } else {
                line += symbol;
            }
        }
        console.log(line);
        line = '';
        position -= 1;
    }
} else {
    console.log('Insira um valor maior do que 1');
}
