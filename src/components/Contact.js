import React from "react";
import {toast} from 'react-hot-toast';

function ContactSection() {

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData
    );

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        toast.success('Message sent successfully');
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error('Error sending message');
      });
  }
  
  return (
    <div className="contactSection-wrapper">
      <div className="contact-section">
        <div className="contactSection-textContainer">
          <div className="contactText-container">
            <div className="contactText">CONTACT</div>
            <div className="contact-line"></div>
          </div>
          <div className="contact-title">
            <div className="title">
              Questions, Thoughts, Any Suggestions
            </div>
            <div className="title-desc">
              Feel free to contact me by filling out the form below.
            </div>
          </div>
        </div>

        <form className="contact-content" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <div className="form-label">
              <p>Name</p>
            </div>
            <div className="form-input">
              <input type="text" name="name" placeholder="e.g. Kunj Patel" onChange={handleChange} required/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-label">
              <p>Email</p>
            </div>
            <div className="form-input">
              <input type="email" name="email" placeholder="e.g. kunjpatel435@gmail.com" onChange={handleChange} required/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-label">
              <p>Message</p>
            </div>
            <div className="form-input">
              <textarea name="message" placeholder="Write message..." rows="5"  onChange={handleChange} required/>
            </div>
          </div>
          <div className="form-group">
              <button className="btn" type="submit">
                SEND
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;