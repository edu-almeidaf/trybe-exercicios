import './App.css';
import React from 'react';
import ExemploConstructorFunction from './components/ExemploConstructorFunction';
import ExemploConstructorArrow from './components/ExemploConstructorArrow';
import ExemploEstado from './components/ExemploEstado';
import ExemploEstadoPublic from './components/ExemploEstadoPublic';



class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <ExemploConstructorFunction />
        <ExemploConstructorArrow />
        <ExemploEstado />
        <ExemploEstadoPublic />
      </div>
    );
  }
}

export default App;
