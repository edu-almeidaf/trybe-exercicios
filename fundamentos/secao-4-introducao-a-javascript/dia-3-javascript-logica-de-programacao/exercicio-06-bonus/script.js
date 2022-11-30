let n = 6;
let col = '*';

if (n > 1) {
    for (index = 1; index <= n; index += 1){
        console.log(col);
        col += '*';
    }
} else {
    console.log('Insira um valor maior do que 1');
}