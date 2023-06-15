const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  
  const strings = simpsons.map(({id, name}) => `${id} - ${name}`);
  
  strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  
  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }

  return chosenSimpson;
}

async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  // await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
  console.log(newArray);
}

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addNelsonFamily() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, { id: '5', name: 'Maggie Simpson' } ]

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

async function main() {
  // await readAll();
  
  // const simpson = await getSimpsonById(11);
  // console.log(simpson);

  // await filterSimpsons();

  // await createSimpsonsFamily();

  // await addNelsonFamily();

  // await replaceNelson();
}

main();