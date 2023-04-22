import React, { Component } from 'react';
import Player from './components/Player/Player';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Player />
        <Sidebar />
      </div>
    );
  }
}

export default App;