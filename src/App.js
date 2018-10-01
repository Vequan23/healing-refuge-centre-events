import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import avi from './imgs/lamonica-avi.jpg'
import hero from './imgs/Healing_through_brokeness-hero.jpg'
import hero2 from './imgs/hfc_stock.jpeg'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentCopyIsVisible: false
    };
  }

  contentCopyToggle = () => {
    this.setState({
      contentCopyIsVisible: !this.state.contentCopyIsVisible
    })
  }
  render() {
    const { contentCopyIsVisible } = this.state
    return (

      <div className="wrapper">
        <nav className="primary-nav">
          <ul className="primary-nav__icon-list">
            <li> <a href="https://www.facebook.com/lamonica.williams.7127"><i class="primary-nav__icon-list-icon fab fa-facebook-square fa-2x"></i></a></li>
            <li><a href="https://www.twitter.com"><i class="primary-nav__icon-list-icon fab fa-twitter-square fa-2x"></i></a></li>
            <li><a href="https://www.paypal.com"><i class="primary-nav__icon-list-icon fab fa-cc-paypal fa-2x"></i></a></li>
          </ul>
        </nav>
        <header className="header">
          <img className="header__avi" src={avi}></img>
          <img className="header__hero" src={hero}></img>
          <p className="header__title">4 Week Therapeutic Healing Group</p>
          <h3 className="header__text">Presented By: E. LaMonica Williams, MSW , LSCW</h3>
          <i class="header__icon content-box__icon fas fa-briefcase-medical fa-3x"></i>


        </header>

        <section className="content-box__wrapper">
          <section className="content-box">
            <i class="content-box__icon fas fa-cross fa-3x"></i>
            <h4 className="content-box__header">Healing through BROKENESS</h4>
            <p className="content-box__paragraph">4 Week Therapeutic Healing Group</p>
            <button onClick={this.contentCopyToggle} className="content-box__button">Read More</button>
            <p className={contentCopyIsVisible ? "content-box__copy" : "content-box__copy--isHidden"}>I am almost certain that you’ve probably heard this statement before, “Time Heals.”  It sounds really good, especially when you’re hurting but it just isn’t the total and complete truth my dear. <br></br><br></br>  It certainly takes time to heal but it undoubtedly takes a lot more than just time to heal a broken heart or a wounded spirit. <br></br><br></br>  I want to share with you exactly what it is going to take for you to heal and not only that my friend, I want to walk alongside you in your unique healing journey in your pursuit to wholeness.</p>
            <p className={contentCopyIsVisible ? "content-box__copy" : "content-box__copy--isHidden"}>So whatever it is that you may be dealing with and struggling through I, a Qualified Mental Health Provider (QMHP) is here to help you navigate through the pain that you’re feeling. <br></br><br></br>  No matter what it is that has gotten you in this painful broken state healing is available for you. This group has been designed especially to help facilitate you through brokenness and into your healing.<br></br><br></br>  We will cover topics surrounded around healing the heart.  We will look the unpredictable things that can happen in our lives to create a devastating heartbreak. <br></br><br></br>  We will look at and define the grief and loss process, we will identify the five stages of  grief and you’ll be able to have a much better understanding of exactly where you are in these stages. <br></br><br></br>  We will look at what it takes to heal and we will be learning and implementing evidence based practices, tools and strategies that will equip you to make measurable progress along your healing journey. <br></br><br></br>  So it any of this resonates with your spirit and your soul then this therapeutic transformative group is for you.  If you think that a friend could benefit from this group I ask you to please share it with them too.  Healing truly is the gift that keeps on giving.
            <br></br><br></br> Bunches of Love,<br></br> <span className="context-box__signature">Lamonica</span>
            </p>
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
