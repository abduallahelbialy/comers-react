/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import peop from '../img/people/1.png'
import peoptwo from '../img/people/2.png'
import peopthrer from '../img/people/3.png'

const Contact = () => {
  return (
    <React.Fragment>
      <section id="page-header" className="about-header">
        <h2> #let's_talk</h2>
        <p>Lorem, ipsum dolor sit amet consectetur</p>
      </section>
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>get in touch</span>
          <h2> visit one of our agency or contact us today</h2>
          <h3>head office</h3>
          <div>
            <li>
              <i className="fa-regular fa-map"></i>
              <p>56 shreeben city ,mansoura egypt</p>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <p>contact@example</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>contact@example</p>
            </li>
            <li>
              <i className="fa-regular fa-clock"></i>
              <p>monday to saturday 9:00am to 16 pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27302.91477512927!2d31.54756728194843!3d31.196774419222486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f77b4e4a1e5cb1%3A0x6569d088dea10882!2z2LTYsdio2YrZhtiMINmF2K_ZitmG2Kkg2LTYsdio2YrZhtiMINmF2LHZg9iyINi02LHYqNmK2YbYjCDZhdit2KfZgdi42Kkg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1698149644447!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section id="form-details">
    <form action="">
        <span>leave a message</span>
        <h2>we love to hear from you</h2>
        <input type="text" placeholder="your name"/>
        <input type="email" placeholder="your email"/>
        <input type="text" placeholder="subject"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
        <button value="submit" className="normal"> submit</button>
    </form>
    <div className="people">
        <div>
            <img src={peop} alt=""/>
            <p><span>john doe</span>senior marketing manager <br/>phone:201028924906 <br/> email:abdallah@gmail.com </p>
        </div>
        <div>
            <img src={peoptwo} alt=""/>
            <p><span>john doe</span>senior marketing manager <br/>phone:201028924906 <br/> email:abdallah@gmail.com </p>
        </div>
        <div>
            <img src={peopthrer} alt=""/>
            <p><span>john doe</span>senior marketing manager <br/>phone:201028924906 <br/> email:abdallah@gmail.com </p>
        </div>
    </div>
</section>
    </React.Fragment>
  );
}

export default Contact
