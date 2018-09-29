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
          <i class="content-box__icon fas fa-cross fa-2x"></i>
          <h4 className="content-box__header">Healing through BROKENESS</h4>
          <p className="content-box__paragraph">4 Week Therapeutic Healing Group</p>
        </section>

        <section className="content-box">
          <i class="content-box__icon fas fa-calendar fa-2x"></i>
          <h4 className="content-box__header">Group Format</h4>
          <p className="content-box__paragraph">60 Minute Tele-Sessions will be held every monday for four weeks at 7:00 p.m CST</p>
          <ul className="content-box__list">
            <li className="content-box__list-Item">Monday November 19th, 2018</li>
            <li className="content-box__list-Item">Monday November 26th, 2018</li>
            <li className="content-box__list-Item">Monday December 3rd,  2018</li>
            <li className="content-box__list-Item">Monday December 10th, 2018</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
