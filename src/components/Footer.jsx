import React from 'react'
import logo from "../img/logo.png";
import pay from '../img/pay/app.jpg'
import paytwo from '../img/pay/play.jpg'
import paythre from '../img/pay/pay.png'


const Footer = () => {
  return (
    <React.Fragment>
      <footer className="section-p1">
        <div className="col">
          <img src={logo} className="logo" alt="" />
          <h4>contact</h4>
          <p>
            <strong>address</strong> mansoura shreeben
          </p>
          <p>
            <strong>phone</strong> +201028924906
          </p>
          <p>
            <strong>hours</strong> 10:00 -18:00, mon -sat
          </p>
          <div className="follow">
            <h4>follow us </h4>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>about</h4>
          <a href="/#">about us</a>
          <a href="/#">delivery information</a>
          <a href="/#">privacy policy</a>
          <a href="/#">contact us</a>
        </div>
        <div className="col">
          <h4>my account</h4>
          <a href="/#">sign in</a>
          <a href="/#"> vies cart</a>
          <a href="/#">my wishlist</a>
          <a href="/#">track my order</a>
          <a href="/#"> help </a>
        </div>
        <div className="col install">
          <h4> install app</h4>
          <p>from app store or google play</p>
          <div className="row">
            <img src={pay} alt="" />
            <img src={paytwo} alt="" />
          </div>
          <p>secured payment gateways</p>
          <img src={paythre} alt="" />
        </div>
        <div className="copyright">
          <p>@ 2023, tech etc -html css by abdaalah el bialy template </p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer
