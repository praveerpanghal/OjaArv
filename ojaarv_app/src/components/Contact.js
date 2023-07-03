import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission and email sending
    // You can use a library like Nodemailer or an API to send the email
    // Example: sendEmail(name, email, message);
    // Reset the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">    

      <h2>Send us a message</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h1>Contact Us</h1>

<div className="row">
  <div className="col-lg-6">
    <h3>New Jersey, USA</h3>
    
  </div>
  <div className="col-lg-6">
    <h3> Noida, India</h3>
   
  </div>
</div>
    </div>
  );
};

export default Contact;
