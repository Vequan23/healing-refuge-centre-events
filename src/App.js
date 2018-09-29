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
          <h3 className="header__text">E. LaMonica Williams, MSW , LSCW</h3>
        </header>
        <section className="content-box">
          <i class="content-box__icon fas fa-cross"></i>
          <h4 className="content-box__header">Healing through BROKENESS</h4>
          <p className="content-box__paragraph">4 Week Therapeutic Healing Group</p>
        </section>
      </div>
    );
  }
}

export default App;
