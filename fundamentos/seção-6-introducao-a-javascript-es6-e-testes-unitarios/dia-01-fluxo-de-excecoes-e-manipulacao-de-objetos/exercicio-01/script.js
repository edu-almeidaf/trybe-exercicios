const pessoaEstudante = {};

let newKey = 'nome';
const nome = 'Eduardo';

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
}
adicionaPropriedade(pessoaEstudante, newKey, nome);

newKey = 'email';
const email = 'eduardoa.fernandes@hotmail.com';

adicionaPropriedade(pessoaEstudante, newKey, email);

newKey = 'telefone';
const telefone = '(42) 9 9940-2705';

adicionaPropriedade(pessoaEstudante, newKey, telefone);

newKey = 'github';
const github = 'github.com/edu-almeidaf';

adicionaPropriedade(pessoaEstudante, newKey, github);

newKey = 'linkedin';
const linkedin = 'linkedin.com/in/almeidaedu/';

adicionaPropriedade(pessoaEstudante, newKey, linkedin);
console.log(pessoaEstudante);

