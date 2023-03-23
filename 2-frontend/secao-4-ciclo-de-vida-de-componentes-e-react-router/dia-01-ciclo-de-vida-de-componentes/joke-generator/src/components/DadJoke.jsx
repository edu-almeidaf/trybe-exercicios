import React, { Component } from 'react';
import Joke from './Joke';

class DadJoke extends Component {

  state = {
    jokeObj: undefined,
    loading: true,
    storedJokes: [],
  }

  fetchJoke = async () => {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState()!
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        loading: false,
        jokeObj: requestObject,
      });
    });
  }


  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke = () => {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }), this.fetchJoke);
  }

  render() {
    const { storedJokes, loading, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <div>
          {storedJokes.map(({ id, joke }) => (
            <p key={ id }>{ joke }</p>
          ))}
        </div>

        <div>
          {
            loading
              ? loadingElement
              : <Joke jokeObj={ jokeObj } saveJoke={ this.saveJoke } />
          }
        </div>
      </div>
    );
  }
}

// this.setState(
//   (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
//   () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
// )

export default DadJoke;