let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let maiorNumero = numbers[0];
let numeroImpar = [];
let menorNumero = numbers[0];


for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    resultado += numbers[index];
}

console.log(resultado);



let media = resultado / numbers.length;

console.log(media);

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}



for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (maiorNumero < numbers[index1]) {
        maiorNumero = numbers[index1];
    }
}

console.log(maiorNumero);



for (index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] % 2 === 1) {
        numeroImpar.push(numbers[index2]);
    }
}

if (numeroImpar !== []) {
    console.log(numeroImpar);
} else {
    console.log('Nenhum valor ímpar encontrado');
}



for (let index3 = 0; index3 < numbers.length; index3 += 1) {
    if (menorNumero > numbers[index3]) {
        menorNumero = numbers[index3];
    }
}

console.log(menorNumero);



for (let index4 = 1; index4 <= 25; index4 += 1) {
    console.log(index4);
    console.log(index4 / 2);
}