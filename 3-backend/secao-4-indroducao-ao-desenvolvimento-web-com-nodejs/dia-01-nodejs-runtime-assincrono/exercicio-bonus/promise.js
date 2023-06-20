const readlineSync = require('readline-sync');

function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if(result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  })
}

async function inputValues() {
  const valorA = readlineSync.questionInt('Digite o primeiro valor: ');
  const valorB = readlineSync.questionInt('Digite o segundo valor: ');
  const valorC = readlineSync.questionInt('Digite o terceiro valor: ');

  try {
    const resolve = await doMath(valorA, valorB, valorC);
    // const resolve = await doMath(1, 1, 'a');
    console.log(resolve);
  } catch (error) {
    console.log(error.message);
  }
}

inputValues();