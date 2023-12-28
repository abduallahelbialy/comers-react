import React from 'react'
import bone from '../img/blog/b1.jpg'
import botwo from '../img/blog/b2.jpg'
import bothre from '../img/blog/b3.jpg'
import bofore from '../img/blog/b4.jpg'

const Blog = () => {
  return (
    <React.Fragment>
      <section id="page-header" className="blog-header">
        <h2> #readmore</h2>

        <p>read all case studies about our products</p>
      </section>
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={bone} alt="" />
          </div>
          <div className="blog-details">
            <h4>the cotton jersey zip-up hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eaque
              vel tenetur praesentium velit. A officia vero corporis ipsa veniam
              maiores, est similique voluptatibus soluta consequuntur eos rerum
              cumque velit.
            </p>
            <a href="/blog">continue reading</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={botwo} alt="" />
          </div>
          <div className="blog-details">
            <h4>the cotton jersey zip-up hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eaque
              vel tenetur praesentium velit. A officia vero corporis ipsa veniam
              maiores, est similique voluptatibus soluta consequuntur eos rerum
              cumque velit.
            </p>
            <a href="/blog">continue reading</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={bothre} alt="" />
          </div>
          <div className="blog-details">
            <h4>the cotton jersey zip-up hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eaque
              vel tenetur praesentium velit. A officia vero corporis ipsa veniam
              maiores, est similique voluptatibus soluta consequuntur eos rerum
              cumque velit.
            </p>
            <a href="/blog">continue reading</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={bofore} alt="" />
          </div>
          <div className="blog-details">
            <h4>the cotton jersey zip-up hoodie</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eaque
              vel tenetur praesentium velit. A officia vero corporis ipsa veniam
              maiores, est similique voluptatibus soluta consequuntur eos rerum
              cumque velit.
            </p>
            <a href="/blog">continue reading</a>
          </div>
          <h1>13/01</h1>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Blog
