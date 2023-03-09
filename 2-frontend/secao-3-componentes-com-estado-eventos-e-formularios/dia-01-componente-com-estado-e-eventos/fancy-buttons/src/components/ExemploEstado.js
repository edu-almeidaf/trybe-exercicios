import React from 'react';

class ExemploEstado extends React.Component {
  
  constructor() {
    super()

    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state` */
    this.state = {
      numeroDeCliques: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {

    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React */
    // Exemplo 1
    // this.setState({
    //   numeroDeCliques: 1,
    // })

    // Exemplo 2 (incrementando o contador de forma dinâmica)
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    // * para dizer que você não vai utilizar o parâmetro, adiciona-se o underline (_).
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }
  
  render() {
    
    const { numeroDeCliques } = this.state;

    return (
      <div>
        <button onClick={ this.handleClick }>{ numeroDeCliques }</button>
      </div>
    );
  }
}

export default ExemploEstado;