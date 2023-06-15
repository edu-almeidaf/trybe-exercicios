const readlineSync = require('readline-sync');

const referenceTable = {
  'Abaixo do peso': {
    min: 0,
    max: 18.4,
  },
  'Peso normal': {
    min: 18.5,
    max: 24.9,
  },
  'Acima do peso (sobrepeso)': {
    min: 25,
    max: 29.9,
  },
  'Obesidade grau I': {
    min: 30,
    max: 34.9,
  },
  'Obesidade grau II': {
    min: 35,
    max: 39.9,
  },
  'Obesidade grau III': {
    min: 40,
    max: 100,
  },
}

const rankIMC = (IMC) => {
  const reference = Object.keys(referenceTable);
  const referenceResult = reference.find((status) => {
    const { min, max } = referenceTable[status];
    return IMC >= min && IMC <= max;
  })

  return referenceResult;
}

const findIMC = (height, weight) => {
  const heightInM = height / 100;

  const IMC = weight / (heightInM ** 2);

  const referenceResult = rankIMC(IMC);

  return {
    IMC: IMC.toFixed(2),
    referenceResult: referenceResult,
    referenceRange: referenceTable[referenceResult],
  };
}

const heightInCm = readlineSync.questionFloat('Qual é sua altura?(cm) ');
const weightInKg = readlineSync.questionFloat('Qual é seu peso? (Kg) ');

const { IMC, referenceRange, referenceResult } = findIMC(heightInCm, weightInKg)

console.log(`Seu IMC atual é ${IMC}`);
console.log(`Referência: ${referenceResult}`);
console.log(`Seu IMC ideal é entre ${referenceRange.min} e ${referenceRange.max}`);