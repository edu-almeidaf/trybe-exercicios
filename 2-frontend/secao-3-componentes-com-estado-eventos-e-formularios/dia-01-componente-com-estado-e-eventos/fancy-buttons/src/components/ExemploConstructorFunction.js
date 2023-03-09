import React from 'react';

class ExemploConstructorFunction extends React.Component {
  
  constructor() {
    // A super() é chamada para garantir que a lógica do react rode antes da minha
    super()
    // Faz o this ser adicionado dentro da minha função, pois o js não entende naturalmente
    this.handleClick1 = this.handleClick1.bind(this)

    // O this é um objetão que o react me entrega dentro da classe
  }
  
  handleClick1() {
    // Sem atribuir o this manualmente no constructor, esse retorno seria undefined
    console.log(this);
    console.log('Botão 1');
  }
  
  render() {
    return (
      // O this.handleClick1 aqui serve para que o react entenda que minha função está dentro da classe
      <div>
        <button onClick={this.handleClick1}>Botão 1</button>
      </div>
    );
  }
}

export default ExemploConstructorFunction;