const myList = [5, 2, 3];

// escreva swap abaixo

const swap = ([a, b, c]) => [c, b, a];

console.log(swap(myList));




const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([car, brand, year]) => ({car, brand, year});
console.log(toObject(palio));



// escreva greet abaixo

const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'



const student1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const student2 = {
  name: `Vitor`,
  age: 20,
}

// escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`

const getLastName = ({lastName = 'LastName não preenchido'}) => `${lastName}`;

console.log(getLastName(student1));
console.log(getLastName(student2));



const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [studant1, [studant2, student3], [student4, student5]] = moreStudents;

console.log(studant1, studant2, student3, student4, student5);