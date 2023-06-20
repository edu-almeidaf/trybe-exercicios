const readlineSync = require('readline-sync');

const handleFibonacciReq = (number) => {
  if (number === 1 || number === 2) {
    return 1;
  }
  
  const result = handleFibonacciReq(number - 1) + handleFibonacciReq(number - 2);
  console.log(result);
  return result;
}

function handleFibonacci(quantity) {
  let valorA = 0;
  let valorB = 1;
  let fibonacci = '';

  fibonacci += valorA + ' ' + valorB;

  for (let i = 0; i <= quantity - 2; i += 1) {
    const valorC = valorA + valorB;
    valorA = valorB;
    valorB = valorC;
    fibonacci += ' ' + valorC;
  }
  
  return fibonacci;
}

function inputUser() {
  const number = readlineSync.questionInt('Digite um número: ');

  if (number <= 0) {
    console.log('O número precisa ser maior do que zero!');
    return;
  }

  console.log(`A sequência fibonacci é: ${handleFibonacci(number)}`);
}

inputUser();