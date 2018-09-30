import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import avi from './imgs/lamonica-avi.jpg'
import hero from './imgs/Healing_through_brokeness-hero.jpg'
import hero2 from './imgs/hfc_stock.jpeg'




class App extends Component {
  render() {
    return (

      <div className="wrapper">
        <nav className="primary-nav">
          <ul className="primary-nav__icon-list">
            <li> <i class="primary-nav__icon-list-icon fab fa-facebook-square fa-2x"></i></li>
            <li><i class="primary-nav__icon-list-icon fab fa-twitter-square fa-2x"></i></li>
            <li><i class="primary-nav__icon-list-icon fab fa-cc-paypal fa-2x"></i></li>
          </ul>
        </nav>
        <header className="header">
          <img className="header__avi" src={avi}></img>
          <img className="header__hero" src={hero}></img>
          <p className="header__title">4 Week Therapeutic Healing Group</p>
          <h3 className="header__text">Presented By: E. LaMonica Williams, MSW , LSCW</h3>
          {/* <button className=" header__button content-box__button">Learn More</button> */}
          <i class="header__icon content-box__icon fas fa-briefcase-medical fa-3x"></i>


        </header>

        <section className="content-box__wrapper">
          <section className="content-box">
            <i class="content-box__icon fas fa-cross fa-3x"></i>
            <h4 className="content-box__header">Healing through BROKENESS</h4>
            <p className="content-box__paragraph">4 Week Therapeutic Healing Group</p>
            <button className="content-box__button">Read More</button>
          </section>

          <section className="content-box">
            <i class="content-box__icon fas fa-calendar fa-3x"></i>
            <h4 className="content-box__header">Group Format</h4>
            <p className="content-box__paragraph">60 Minute Tele-Sessions will be held every monday for four weeks at 7:00 p.m CST</p>
            <ul className="content-box__list">
              <li className="content-box__list-Item"> Monday November 19th, 2018</li>
              <li className="content-box__list-Item">  Monday November 26th, 2018</li>
              <li className="content-box__list-Item">  Monday December 3rd, 2018</li>
              <li className="content-box__list-Item"> Monday December 10th, 2018</li>
            </ul>
          </section>

          <section className="content-box">
            <i class="content-box__icon fas fa-user fa-3x"></i>
            <h4 className="content-box__header">Registration</h4>
            <p className="content-box__paragraph"> $60.00/ per session <br></br> Total = $240.00(4 sessions)</p>
            <h5 className="content-box__header">Payment Plans</h5>
            <ul className="content-box__list">
              <li className="content-box__list-Item">  You can pay in full before October 4th, 2018 at a special rate of just $220.00</li>
              <li className="content-box__list-Item">  You can do a split payment option. Your payment may be split into two payments if necessary. <br></br><br></br> One payment of 120 will be due at the time of Registration and your last payment of 120 will be due two weeks later</li>
              <li className="content-box__list-Item">  Your full payment must be in by November 1st, 2018 to lock the rate of $240.00 in (so think about when you will register because you only have two weeks after registration to pay your remaining balance) <br></br><br></br> Ex. if you register October 18th, 2018 your second and final payment will be due November 1st, 2018</li>
              <li className="content-box__list-Item"> After November 1st, 2018 the rate will increase to $260.00 ($65.00/per session)</li>
              <p className=" content-box__paragraph content-box__paragraph--bold">To register please email lamonica@healingrc.com and eeither Lamonica or one of our team members wil contact you to get you registered. I am looking forward to working with you as you embrace your healing</p>
            </ul>
          </section>

          <section className="content-box">
            <i class="content-box__icon fas fa-money-bill-alt fa-3x"></i>
            <h4 className="content-box__header">Payment Options</h4>
            <ul className="content-box__list">
              <li className="content-box__list-Item">  Cash</li>
              <li className="content-box__list-Item">  Credit Card</li>
              <li className="content-box__list-Item"> <a href="https://www.paypal.com">  Paypal:</a></li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
