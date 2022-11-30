let n = 6;
let symbol = '*';
let line = '';

if (n > 1) {
    for (let index = 0; index < n; index += 1){
        line += symbol;
        console.log(line);
        
    }
} else {
    console.log('Insira um valor maior do que 1');
}