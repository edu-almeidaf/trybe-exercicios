function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
imprimeIdade()



const pessoa = {
    nome: 'Henri',
    idade: 20
}

pessoa.nome = 'Luna';
pessoa.idade = 19;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);


let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);