const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const addTurno = (objeto, chave, valor) => {
 objeto[chave] = valor;
}
addTurno(lesson2, 'turno', 'noite');
console.log(lesson2); 


const listKeys = (objeto) => Object.keys(objeto);
console.log(listKeys(lesson2));


const objectLength = (objeto) => Object.keys(objeto).length;
console.log(objectLength(lesson1));


const listValues = (objeto) => Object.values(objeto);
console.log(listValues(lesson3));


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);


const getNumberOfStudents = (objeto) => {
  let total = 0;
  const keys = Object.keys(objeto);

  for (let index in keys) {
    total += objeto[keys[index]].numeroEstudantes;
  }

  return total;
}
console.log(getNumberOfStudents(allLessons));


const getValueByNumber = (objeto, number) => Object.values(objeto)[number];
console.log(getValueByNumber(lesson1, 2));


const verifyPair = (objeto, chave, valor) => {
  const entries = Object.entries(objeto);
  let isEqual = false;

  for (let index in entries) {
    if (entries[index][0] === chave && entries[index][1] === valor) isEqual = true;
  }

  return isEqual;
}
console.log(verifyPair(lesson2, 'professor', 'Carlos'));