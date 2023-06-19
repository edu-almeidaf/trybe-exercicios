const { expect } = require('chai');
const calculaSituacao = require('../calculaSituacao');

describe('Quando a média for maior que 7', function () {
  it('retorna "reprovado"', function () {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  })
})