const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((guest) => guest === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));



const peoples = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (peoples, age) => {
  return peoples.every((people) => people.age >= age);
}

console.log(verifyAges(peoples, 18));
console.log(verifyAges(peoples, 14));