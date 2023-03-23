import React, { Component } from 'react';

class Joke extends Component {
  render() {
    const { jokeObj, saveJoke } = this.props;
    return (
      <>
        <p>{ jokeObj.joke }</p>
        <button type="button" onClick={ saveJoke }>Salvar piada!</button>
      </>
    );
  }
}

export default Joke;