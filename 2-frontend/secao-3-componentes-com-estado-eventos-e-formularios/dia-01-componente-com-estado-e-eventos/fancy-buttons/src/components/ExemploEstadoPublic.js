import React from 'react';

class ExemploEstadoPublic extends React.Component {

  // Public Class Field
  state = {
    numeroDeCliques: 0,
    numeroDeCliques1: 0
  }
  
  // Declarei como arrow, então não precisou do constructor
  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }
  
  // chamada na linha 20 com object destructuring
  minhaFuncao = (contador) => {
    this.setState(({ numeroDeCliques1 }) => ({
      numeroDeCliques1: numeroDeCliques1 + contador,
    }));
  }

  getButtonColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white';
  }

  getButtonColorWithCss = (num) => {
    return num % 2 !== 0 ? 'red' : 'green';
  }

  render() {
    
    const { numeroDeCliques, numeroDeCliques1 } = this.state;

    return (
      // sintaxe da linha 25 é para chamar um evento com parâmetro
      <div>
        <button
          onClick={ this.handleClick }
          style={ {backgroundColor: this.getButtonColor(numeroDeCliques) }}
        >
          { numeroDeCliques }
        </button>
        <button 
          onClick={() => this.minhaFuncao(1)}
          className={this.getButtonColorWithCss(numeroDeCliques1)}
        >
          { numeroDeCliques1 }
        </button>
      </div>
    );
  }
}

export default ExemploEstadoPublic;