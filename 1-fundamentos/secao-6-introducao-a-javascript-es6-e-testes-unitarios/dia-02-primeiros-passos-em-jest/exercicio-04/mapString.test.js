const {encode, decode} = require('./mapString');

describe('Testa a função encode e decode', () => {
  it('A função encode é definida', () => {
    expect(encode).toBeDefined();
  });

  it('A função encode é uma função', () => {
    expect(typeof(encode)).toBe('function');
    expect(typeof encode).toEqual('function');
  });

  it('Converte apenas a vogal "a" no número  1', () => {
    expect(encode('ana')).toBe('1n1');
  });

  it('Converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toBe('2l2');
  });

  it('Converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toBe('x3x3');
  });

  it('Converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toBe('4v4');
  });

  it('Converte a vogal "u" no número 5', () => {
    expect(encode('chuchu')).toBe('ch5ch5');
  });

  it('Checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('eduardo').length).toEqual(7);
  });

  it('A função decode é definida', () => {
    expect(decode).toBeDefined();
  });

  it('A função decode é uma função', () => {
    expect(typeof(decode)).toBe('function');
    expect(typeof decode).toEqual('function');
  });

  it('Converte apenas o número 1 na vogal "a"', () => {
    expect(decode('1n1')).toBe('ana');
  });

  it('Converte o número 2 na vogal "e"', () => {
    expect(decode('2l2')).toBe('ele');
  });

  it('Converte o número 3 na vogal "i"', () => {
    expect(decode('x3x3')).toBe('xixi');
  });

  it('Converte o número 4 na vogal "o"', () => {
    expect(decode('4v4')).toBe('ovo');
  });

  it('Converte o número 5 na vogal "u"', () => {
    expect(decode('ch5ch5')).toBe('chuchu');
  });

  it('Checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('2d51rd4').length).toEqual(7);
  });
})