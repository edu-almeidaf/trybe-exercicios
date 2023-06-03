const pessoas = [
  {
    nome: 'baeta',
    idade: '18',
    endereco: {
      rua: 'jardim',
      numero: 12,
    },
    filhos: [
      {
        nome: 'João Henrique',
        idade: '9',
      },
      {
        nome: 'Ana Julia',
        idade: '2',
      },
    ],
  },
  {
    nome: 'ronald',
    idade: '18',
    endereco: {
      rua: 'jardim',
      numero: 12,
    },
    filhos: [
      {
        nome: 'Filho',
        idade: '9',
      },
    ],
  },
]

const result = pessoas.reduce((acc, { filhos }) => {
  const nomesDosFilhos = filhos.map(filho => filho.nome);
  acc = [...acc, ...nomesDosFilhos];
  return acc;
}, []).join(', ');

console.log(result);