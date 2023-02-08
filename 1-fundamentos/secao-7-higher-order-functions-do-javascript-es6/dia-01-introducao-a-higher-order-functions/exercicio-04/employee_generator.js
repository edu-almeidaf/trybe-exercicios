const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),
    id2: employeeGenerator('Luiza Drumond'),
    id3: employeeGenerator('Carla Paiva'),
  }
  return employees;
};

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  //Método 2: const email = fullName.toLowerCase().split(' ').join('_');
  return {nome: fullName, email: `${email}@trybe.com`}
};

console.log((newEmployees(employeeGenerator)));