import React from "react";
import logo from "../../assets/images/logo.png";
const ContactUs = () => {
  return (
    <>
      <div className="contactus">
        <div className="contact">
          <h1>Contact Us</h1>
          <div className="contactdesc">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="contactpera">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat nisi tortor tellus sagittis donec id est, dolor, morbi.
                Id facilisis sem sit maecenas metus, lacinia non. Lorem congue
                est at ultrices suscipit at nulla neque volutpat. Porta proin
                hdhhhjff.
              </p>
            </div>
          </div>

          <div className="contactinfo">
            <div className="navigation">
              <h3>Navigation</h3>
              <p>
                <span className="rightarrow">&#9654;</span> <p>All Course</p>
              </p>
              <p>
                <span className="rightarrow">&#9654;</span> <p>Contact Us</p>
              </p>
              <p>
                <span className="rightarrow">&#9654;</span> <p>Posts</p>
              </p>
            </div>

            <div className="categories">
              <h3>Categories</h3>
              <p>
                <span className="rightarrow">&#9654;</span> <p>Featured</p>
              </p>
              <p>
                <span className="rightarrow">&#9654;</span> <p>Free Recipes</p>
              </p>
              <p>
                <span className="rightarrow">&#9654;</span> <p>Paid Courses</p>
              </p>
            </div>

            <div className="getintouch">
              <h3>Get in touch</h3>
              <p>
                <span>

                  <span className="address">Phone:</span>
                </span>
                <p>+123 456 7890</p>
              </p>
              <p>
                <span className="details">
                  <span className="address">Address: </span>Lumbung <br />
                  Hidup St. Madiun <br /> City East Java 63125
                </span>
              </p>
              <p>
                <span>
                  <span className="address">Email: </span>
                </span>
                <p>cookingstuff@gmail.com</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
