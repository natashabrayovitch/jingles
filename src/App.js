import React, { Component } from 'react';
import jinglesLogo from './JinglesVB.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={jinglesLogo} alt='Jingles Logo'/>
      </div>
    );
  }
}

export default App;
