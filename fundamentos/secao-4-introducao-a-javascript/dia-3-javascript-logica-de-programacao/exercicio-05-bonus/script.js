let n = 5;
let col = '*';

if (n > 1) {
    for (index = 1; index < n; index += 1) {
        col += '*';
    }

    for (index1 = 1; index1 <= n; index1 += 1) {
        console.log(col);
    }

} else {
    console.log('Insira um valor maior do que 1!');
}