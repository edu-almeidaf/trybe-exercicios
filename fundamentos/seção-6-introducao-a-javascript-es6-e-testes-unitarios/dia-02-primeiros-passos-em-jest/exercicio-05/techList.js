const techList = (arrayTecnologies, name) => {
  if (arrayTecnologies.length === 0) return 'Vazio!';

  const sortedArray = arrayTecnologies.sort();
  const tecnologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    tecnologyList.push({
      tech: sortedArray[index],
      name: name,
    })  
  }

  return tecnologyList;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')); 

module.exports = techList;