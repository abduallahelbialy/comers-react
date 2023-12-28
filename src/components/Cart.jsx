import React from 'react'
import fpr from '../img/products/f1.jpg'
import fprtwo from '../img/products/f2.jpg'
import fprthre from '../img/products/f3.jpg'

const Cart = () => {
  return (
    <React.Fragment>
      <section id="page-header" className="about-header">
        <h2> #let's_talk</h2>
        <p>Lorem, ipsum dolor sit amet consectetur</p>
      </section>
      <section id="cart" className="section-p1">
    <table width="100%">
        <thead>
            <tr>
                <td>remove</td>
                <td>image</td>
                <td>product</td>
                <td>price</td>
                <td>quantity</td>
                <td>subtotal</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <a href="/cart"><i className="fa-solid fa-trash-can"></i></a>
                </td>
                <td>
                    <img src={fpr} alt=""/>
                </td>
                <td>cartoon astronaut t-shirts</td>
                <td>$118.19</td>
                <td><input type="number" value="1"/></td>
                <td>$118.19</td>
            </tr>
            <tr>
                <td>
                    <a href="/cart"><i className="fa-solid fa-trash-can"></i></a>
                </td>
                <td>
                    <img src={fprtwo} alt=""/>
                </td>
                <td>cartoon astronaut t-shirts</td>
                <td>$118.19</td>
                <td><input type="number" value="1"/></td>
                <td>$118.19</td>
            </tr>
            <tr>
                <td>
                    <a href="/cart"><i className="fa-solid fa-trash-can"></i></a>
                </td>
                <td>
                    <img src={fprthre} alt=""/>
                </td>
                <td>cartoon astronaut t-shirts</td>
                <td>$118.19</td>
                <td><input type="number" value="1"/></td>
                <td>$118.19</td>
            </tr>
        </tbody>
    </table>
</section>
    </React.Fragment>
  );
}

export default Cart
