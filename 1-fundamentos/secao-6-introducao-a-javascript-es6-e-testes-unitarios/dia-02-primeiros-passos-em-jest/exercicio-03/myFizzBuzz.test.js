const myFizzBuzz = require('./myFizzBuzz');

describe('Testes da função myFizzBuzz', () => {
  it('Verifica se myFizzBuzz(15) retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se myFizzBuzz(6) retorna fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('Verifica se myFizzBuzz(10) retorna buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Verifica se myFizzBuzz(7) retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('Verifica se myFizzBuzz("15") retorna false', () => {
    expect(myFizzBuzz('15')).toBe(false);
  });
})