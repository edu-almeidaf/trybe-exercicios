// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Maçã', 'Kiwi', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Creme de leite', 'Leite em pó'];

const fruitSalad = (fruit, additional) => {
  const fruitSaladComplete = [...fruit, ...additional];
  return fruitSaladComplete;
};

console.log(fruitSalad(specialFruit, additionalItens));