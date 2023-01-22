const sum = require('./sum');

describe('A função sum', () => {
  it('Retorna 9 quando sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  it('Retorna um erro quando sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});