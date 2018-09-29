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
          <button className="content-box__button">Read More</button>
        </section>

        <section className="content-box">
          <i class="content-box__icon fas fa-calendar fa-2x"></i>
          <h4 className="content-box__header">Group Format</h4>
          <p className="content-box__paragraph">60 Minute Tele-Sessions will be held every monday for four weeks at 7:00 p.m CST</p>
          <ul className="content-box__list">
            <li className="content-box__list-Item"> - Monday November 19th, 2018</li>
            <li className="content-box__list-Item"> - Monday November 26th, 2018</li>
            <li className="content-box__list-Item"> - Monday December 3rd, 2018</li>
            <li className="content-box__list-Item">- Monday December 10th, 2018</li>
          </ul>
        </section>

        <section className="content-box">
          <i class="content-box__icon fas fa-user fa-2x"></i>
          <h4 className="content-box__header">Registration</h4>
          <p className="content-box__paragraph"> $60.00/ per session <br></br> Total = $240.00(4 sessions)</p>
          <h5 className="content-box__header">Payment Plans</h5>
          <ul className="content-box__list">
            <li className="content-box__list-Item"> - You can pay in full before October 4th, 2018 at a special rate of just $220.00</li>
            <li className="content-box__list-Item"> - You can do a split payment option. Your payment may be split into two payments if necessary. One payment of 120 will be due at the time of Registration and your last payment of 120 will be due two weeks later</li>
            <li className="content-box__list-Item"> - Monday December 3rd, 2018</li>
            <li className="content-box__list-Item">- Monday December 10th, 2018</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
