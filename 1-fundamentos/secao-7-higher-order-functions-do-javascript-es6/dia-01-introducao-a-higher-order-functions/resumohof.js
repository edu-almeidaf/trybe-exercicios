const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

// Mostre no console o nome das pessoas do array de pessoas:
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

// Encontre a primeira pessoa chamada 'Aline':
const encontraPessoa = pessoas.find((pessoa) => pessoa.nome === 'Aline');
console.log(encontraPessoa);

// Verifique se alguma pessoa tem mais de 30 anos:
const verifyPessoa = pessoas.some((pessoa) => pessoa.idade > 30);
console.log(verifyPessoa);

// Verifique se todas as pessoas têm mais de 30 anos:
const verificaMaisDeTrinta = pessoas.every((pessoa) => pessoa.idade > 30);
console.log(verificaMaisDeTrinta);