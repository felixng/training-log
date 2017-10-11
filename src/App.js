import React, { Component } from 'react';
import logo from './logo.svg';

import Frame from './Frame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">InstaProgress</h1>
        </header>
        <p className="App-intro">
        </p>
        <Frame>
        </Frame>
        <footer className="footer">
          Link
          Link
          Link
          Link
        </footer>
      </div>
    );
  }
}

export default App;
