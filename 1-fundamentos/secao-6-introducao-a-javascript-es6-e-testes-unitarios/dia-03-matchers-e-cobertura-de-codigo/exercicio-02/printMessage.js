let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (!characterInfo || characterInfo.personagem === undefined) {
    throw new Error('Objeto inválido');
  }
    return ('Boas vindas, ' + characterInfo.personagem);
};

console.log(printMessage(info));

module.exports = { info, printMessage };