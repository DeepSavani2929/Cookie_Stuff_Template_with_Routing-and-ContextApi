import React from "react";  

const ContactUsPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-banner">
        <h1>Get in Touch with Us</h1>
        <p>
          Whether you have a delicious recipe to share, a question about cooking,
          or just want to say hello – we’d love to hear from you!
        </p>
      </div>

      <div className="contact-wrapper" style = {{height: "61vh"}}>

        <div className="contact-info">
          <h2>📞 Contact Information</h2>
          <p><strong>Name:</strong> Chef Maria Rossi</p>
          <p><strong>Email:</strong> cookingcorner@example.com</p>
          <p><strong>Phone:</strong> +1 (555) 987-6543</p>
          <p><strong>Location:</strong> 45 Foodie Street, Flavor Town</p>
        </div>


        <div className="contact-form-container">
          <h2>🍳 Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
