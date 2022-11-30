let n = 8;
let symbol = '*';
let line = ''

if (n > 1) {
    for (index = 0; index < n; index += 1) {
        line += symbol;
    }

    for (index1 = 1; index1 <= n; index1 += 1) {
        console.log(line);
    }

} else {
    console.log('Insira um valor maior do que 1!');
}