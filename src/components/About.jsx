/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import abot from '../img/about/a6.jpg'
import vido from '../img/about/1.mp4'

const About = () => {
  return (
    <React.Fragment>
      <section id="page-header" classNameName="about-header">
        <h2> #knowUs</h2>
        <p>Lorem, ipsum dolor sit amet consectetur</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src={abot} alt="" />
        <div>
          <h2>who we are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            repudiandae possimus! Obcaecati vero pariatur nisi architecto a
            harum sint perferendis quis. Distinctio quisquam, fugiat officia
            facilis
          </p>
          <abbr title="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            voluptatum laudantium nihil ut! Culpa quos dolorum cumque nesciunt
            maxime dolorem{" "}
          </abbr>
          <br />
          <br />
          <marquee loop="-1" scrollamount="5" bgColor="#ccc" width="100%">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            voluptatum laudantium nihil ut! Culpa quos dolorum cumque nesciunt
            maxime dolorem
          </marquee>
        </div>
      </section>
      <section id="about-app" className="section-p1">
        <h1>
          dowload our<a href="/About"> App</a>
        </h1>
        <div className="video">
          <video type="video/mp4" autoPlay muted loop src={vido} />
        </div>
      </section>
    </React.Fragment>
  );
}

export default About
