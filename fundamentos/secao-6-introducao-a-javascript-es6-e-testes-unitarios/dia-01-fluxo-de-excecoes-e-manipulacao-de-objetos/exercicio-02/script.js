//Forma 1:

// const student1 = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskills: 'Ótimo',
// };

// const student2 = {
//   html: 'Bom',
//   css: 'Ótimo',
//   javascript: 'Ruim',
//   softskills: 'Ótimo',
//   git: 'Bom', // chave adicionada
// };

// const exibirHabilidades = (objeto) => {
//   const habilidades = Object.keys(objeto);
//   const nivel = Object.values(objeto);

//   for (let index = 0; index < habilidades.length; index += 1) {
//     console.log(`${habilidades[index]}, Nível: ${nivel[index]}`);
//   }
// }

// console.log('Estudante 1:');
// exibirHabilidades(student1);

// console.log('Estudante 2:');
// exibirHabilidades(student2);


//Forma 2 com for in:

const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);