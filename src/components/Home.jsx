import React from 'react'
import imgeone from '../img/features/f1.png'
import imgetwo from '../img/features/f2.png'
import imgethre from '../img/features//f3.png'
import imgefor from '../img/features/f4.png'
import imgefife from '../img/features/f5.png'
import imgesix from '../img/features/f6.png'
import proone from '../img/products/f1.jpg'
import protwo from '../img/products/f2.jpg'
import prothre from '../img/products/f3.jpg'
import profor from '../img/products/f4.jpg'
import profife from '../img/products/f5.jpg'
import prosix from '../img/products/f6.jpg'
import prosiven from '../img/products/f7.jpg'
import proeat from '../img/products/f8.jpg'
import newproine from '../img/products/n1.jpg'
import newprtwo from '../img/products/n2.jpg'
import newprthre from '../img/products/n3.jpg'
import newprfore from '../img/products/n4.jpg'
import newprfife from '../img/products/n5.jpg'
import newprsix from '../img/products/n6.jpg'
import newprssiven from '../img/products/n7.jpg'
import newpreat from '../img/products/n8.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <React.Fragment>
      <section id="hero">
        <h4>Trade-in offer</h4>
        <h2> super value deals</h2>
        <h1> on all products</h1>
        <p> save more wight coupons & up to 70% off</p>
        <button> shop now</button>
      </section>
      <section id="feature" classNameName="section-p1">
        <div classNameName="box">
          <img src={imgeone} alt="" />
          <h6>free shipping</h6>
        </div>
        <div classNameName="box">
          <img src={imgetwo} alt="" />
          <h6>online order</h6>
        </div>
        <div classNameName="box">
          <img src={imgethre} alt="" />
          <h6>save money</h6>
        </div>
        <div classNameName="box">
          <img src={imgefor} alt="" />
          <h6>promotions </h6>
        </div>
        <div classNameName="box">
          <img src={imgefife} alt="" />
          <h6> happy sell</h6>
        </div>
        <div classNameName="box">
          <img src={imgesix} alt="" />
          <h6> f24/7 support </h6>
        </div>
      </section>

      <Link to="product-detlis/1">
      
      <section id="products1" className="section-p1">
        <h2>featured products</h2>
        <p>summer collection new morden design</p>
        <div className="container">
          <div className="pro">
            <img src={proone} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro" onclick="window.location.href='sproduct.html'">
            <img src={protwo} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro" onclick="window.location.href='sproduct.html'">
            <img src={prothre} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro">
            <img src={profor} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro" onclick="window.location.href='sproduct.html'">
            <img src={profife} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro" onclick="window.location.href='sproduct.html'">
            <img src={prosix} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro" onclick="window.location.href='sproduct.html'">
            <img src={prosiven} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro" onclick="window.location.href='sproduct.html'">
            <img src={proeat} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
        </div>
      </section>
      </Link>
      <section id="banner" className="section-m1">
        <h4>repair services</h4>
        <h2>
          up to <span>70% off</span>- all t-shirts & accessories{" "}
        </h2>
        <button className="normal">explore more</button>
      </section>
      <section id="products1" className="section-p1">
        <h2>new arrivals</h2>
        <p>summer collection new morden design</p>
        <div className="container">
          <div className="pro">
            <img src={newproine} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro">
            <img src={newprtwo} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro">
            <img src={newprthre} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro">
            <img src={newprfore} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro">
            <img src={newprfife} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro">
            <img src={newprsix} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro">
            <img src={newprssiven} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
          <div className="pro">
            <img src={newpreat} alt="" />
            <div className="des">
              <span> adidas</span>
              <h4>cartoon astronaut t-shirts</h4>
              <div className="rateYo"></div>
              <h5>$78</h5>
            </div>
            <a href="/#" className="ico">
              <i className="fa-solid fa-cart-shopping "></i>
            </a>
          </div>
        </div>
      </section>
      <section id="sm-banner" class="section-p1">
        <div class="banner-box">
          <h4>creazy deals</h4>
          <h2> buy 1 get 1 free</h2>
          <span>the best classic dress is on sale at care</span>
          <button class="white">Learn More</button>
        </div>
        <div class="banner-box banner-box2">
          <h4>springs/summer</h4>
          <h2> upcomming season</h2>
          <span>the best classic dress is on sale at care</span>
          <button class="white"> Collection</button>
        </div>
      </section>
      <section id="banner3">
        <div class="banner-box">
          <h2> seasonal sale</h2>
          <h3>winter collection -50% off</h3>
        </div>
        <div class="banner-box banner-box2">
          <h2> new footweear collection</h2>
          <h3>spring /summer 2023</h3>
        </div>
        <div class="banner-box banner-box3">
          <h2> t-shirts</h2>
          <h3>new trendy prints</h3>
        </div>
      </section>
      <section id="nesletter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>sign up for newsletters</h4>
          <p>
            {" "}
            get e-mail updates about our latest shop and{" "}
            <span>special offer</span>
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="your email addrees" />
          <button class="normal"> sign up </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home
