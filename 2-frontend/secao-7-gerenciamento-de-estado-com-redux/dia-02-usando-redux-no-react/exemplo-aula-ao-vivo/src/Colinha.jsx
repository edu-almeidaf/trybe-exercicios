import React, { Component } from 'react';

class Colinha extends Component {

  // Parte 1
  state = {
    xablau: '',
    xablau2: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  
  handleClick = () => {
    //Parte 3
    const { xablau } = this.state;

    // Parte 4
    this.setState({
      xablau2: xablau,
    })
  }

  render() {
    const { xablau } = this.state;
    return (
      <form>
       <input
        type="text"
        name='xablau'
        value={ xablau }
        onChange={ this.handleChange }  
      />
      <button
        type="button"
        //Parte 2
        onClick={ this.handleClick }
      >
        Enviar
      </button>
      </form>
    );
  }
}

export default Colinha;