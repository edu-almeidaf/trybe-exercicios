import React from 'react';

class ExemploConstructorArrow extends React.Component {
  
  handleClick1 = () => {
    // Declarando a função como arrow function, eu não preciso do constructor e ele reconhece o this dentro da função
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

export default ExemploConstructorArrow;