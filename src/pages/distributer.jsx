import React, { useState } from 'react';
import './distributer.css'; // Import CSS for styling
import login_logo from "../assets/logo/logo.png";
import {Link} from "react-router-dom";

const Distributer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message from ${name}: \n${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    
    <div className="contact-container">
      <header className="contact-header">
      <Link to="/">
      <img src={login_logo} className="ourlogo"/></Link>
        <h1>Be Our Distributer</h1>
        <p>We're here to help you with our premium water bottles.</p>
      </header>

      <section className="contact-info">
        <h2>About Our Water Bottles</h2>
        <p>Our water bottles are made from high-quality, BPA-free materials that keep your water fresh and pure. We offer different sizes to meet your needs — from 250ml to 2 liters, for any occasion.</p>
        <div className="contact-details">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> 8019824518</p>
          <p><strong>Email:</strong>saimadiraju93@gmail.com </p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
    </div>
    </>
  );
};

export default Distributer;
