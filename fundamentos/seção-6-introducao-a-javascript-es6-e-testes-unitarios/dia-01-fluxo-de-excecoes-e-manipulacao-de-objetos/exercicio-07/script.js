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
  turno: 'noite',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const createReport = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  
  for (index in array) {
    if (obj[array[index]].materia === 'Matemática') {
      total += obj[array[index]].numeroEstudantes;
    }
  }
  return `Total de alunos que assistiram as aulas de matemática: ${total}.`;
}
console.log(createReport(allLessons));


const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;

  const array = Object.values(obj);
 
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia);
      allStudent += array[index].numeroEstudantes;
    }
  }
  return {aulas: allLessons, estudantes: allStudent};

}  

const createLog = (allLessons, name) => {
  const report = {}
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createLog(allLessons, 'Maria Clara'));