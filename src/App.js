import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import avi from './imgs/lamonica-avi.jpg'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <img className="header__avi" src={avi}></img>
        </header>
        <main>

          <p>Hello</p>
        </main>
      </div>
    );
  }
}

export default App;
