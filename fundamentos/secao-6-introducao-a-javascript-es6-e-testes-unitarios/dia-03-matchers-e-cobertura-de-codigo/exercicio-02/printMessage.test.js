const {info, printMessage} = require('./printMessage');

describe('Teste da função printMessage', () => {
  it('Testa se info contém a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });

  it('Testes printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });

  it('Teste de fluxo printMessage', () => {
    expect(() => printMessage('Margarida')).toThrow('Objeto inválido');
  });
})