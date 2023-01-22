const myRemove = require('./myRemove');

describe('testes da função myRemove', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).not.toContain(5);
  });
})