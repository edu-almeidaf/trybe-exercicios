const searchEmployee = require('./dados');

describe('Testes da função searchEmployee', () => {
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof(searchEmployee)).toBe('function');
  });

  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
     const actual = searchEmployee('8579-6', 'firstName');
     const expected = 'Ana';
     expect(actual).toBe(expected);
  });

  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    const actual = searchEmployee('4456-4', 'lastName');
    const expected = 'Zuckerberg';
    expect(actual).toBe(expected);
  });

  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    const actual = searchEmployee('5569-4', 'specialities');
    expect(actual).toContain('Frontend', 'Redux', 'React', 'CSS');
  });

  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => searchEmployee('2568-6', 'firstName')).toThrow();
  });

  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => searchEmployee('2568-6', 'lastName')).toThrow(new Error('ID não identificado'));
  });

  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => searchEmployee()).toThrow();
  });

  it('Testa a mensagem do erro para a informação inexistente', () => {
    expect(() => searchEmployee('5569-4', 'address')).toThrow(new Error('Informação indisponível'));
  });
})