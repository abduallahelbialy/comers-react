import React from 'react'
import proone from "../img/products/f1.jpg";
import protwo from "../img/products/f2.jpg";
import prothre from "../img/products/f3.jpg";
import profor from "../img/products/f4.jpg";


const Productdetils = () => {
  return (
    <React.Fragment>
    <React.Fragment >
    <section id="prodetails" class="section-p1">
    <div class=" single-pro-image ">
        <img src={proone} width="100%" id="mainimg" alt=""/>
        <div class="small-img-group">
            <div class="small-img-col">
                <img src={proone} width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src={protwo} width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src={prothre} width="100%" class="small-img" alt=""/>
            </div>
            <div class="small-img-col">
                <img src={profor} width="100%" class="small-img" alt=""/>
            </div>
        </div>
    </div>
    <div class="single-pro-details">
        <h6>home /t-shirts</h6>
        <h4>men's fashion t shirt</h4>
        <h2>$139.00</h2>
        <select>
            <option> select size </option>
            <option> xl </option>
            <option> xxl </option>
            <option> small </option>
            <option> large </option>
        </select>
        <input type="number" value="1"/>
        <button class="normal">add to cart</button>
        <h4>products details</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ratione earum minima, aliquid quidem eos
            odit cumque incidunt fugiat magni, maxime reiciendis error itaque voluptatum veritatis! Vero tenetur ducimus
            cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, magnam itaque maxime
            molestiae voluptates nemo tempora placeat, totam porro quam soluta. Inventore ad culpa cum officiis optio
            aut omnis ipsum!</span>
    </div>

</section>
<section id="products1" class="section-p1">
    <h2>featured products</h2>
    <p>summer collection new morden design</p>
    <div class="container">
        <div class="pro">
            <img src={proone} alt=""/>
            <div class="des">
                <span> adidas</span>
                <h4>cartoon astronaut t-shirts</h4>
                <div class="rateYo">
                </div>
                <h5>$78</h5>
            </div>
            <a href="/#" class="ico"><i class="fa-solid fa-cart-shopping "></i>
            </a>
        </div>
        <div class="pro">
            <img src={protwo} alt=""/>
            <div class="des">
                <span> adidas</span>
                <h4>cartoon astronaut t-shirts</h4>
                <div class="rateYo">
                </div>
                <h5>$78</h5>
            </div>
            <a href="/#" class="ico"><i class="fa-solid fa-cart-shopping "></i>
            </a>
        </div>
        <div class="pro">
            <img src={prothre} alt=""/>
            <div class="des">
                <span> adidas</span>
                <h4>cartoon astronaut t-shirts</h4>
                <div class="rateYo">
                </div>
                <h5>$78</h5>
            </div>
            <a href="/#" class="ico"><i class="fa-solid fa-cart-shopping "></i>
            </a>
        </div>
        <div class="pro">
            <img src={profor} alt=""/>
            <div class="des">
                <span> adidas</span>
                <h4>cartoon astronaut t-shirts</h4>
                <div class="rateYo">
                </div>
                <h5>$78</h5>
            </div>
            <a href="/#" class="ico"><i class="fa-solid fa-cart-shopping "></i>
            </a>
        </div>


    </div>
</section>
<section id="nesletter" class="section-p1 section-m1">
    <div class="newstext">
        <h4>sign up for newsletters</h4>
        <p> get e-mail updates about our latest shop and <span>special offer</span></p>
    </div>
    <div class="form">
        <input type="text" placeholder="your email addrees"/>
        <button class="normal"> sign up </button>
    </div>
</section>
    </React.Fragment>
      
    </React.Fragment>
  )
}

export default Productdetils
