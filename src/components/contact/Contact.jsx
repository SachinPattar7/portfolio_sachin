import React, { useState } from 'react';
import '../../assets/scss/Contact.scss';
import linkedin from '../../assets/images/social/linkedin.png';
import github from '../../assets/images/social/github.png';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [nameText, setNameText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [messageText, setMessageText] = useState('');

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    // Perform form submission logic here
    // You can use the form data, nameText, emailText, and messageText to send the form data to your backend or perform any other required actions

    // Example: Simulating a form submission
    setTimeout(() => {
      setNameText('');
      setEmailText('');
      setMessageText('');
      form.reset();
      setStatus('SUCCESS');
    }, 1000);
  };

  const handleNameChange = (event) => {
    const input = String(event.target.value);
    setNameText(input);
  };

  const handleEmailChange = (event) => {
    const input = String(event.target.value);
    setEmailText(input);
  };

  const handleMessageChange = (event) => {
    const input = String(event.target.value);
    setMessageText(input);
  };

  const handleCancel = () => {
    setNameText('');
    setEmailText('');
    setMessageText('');
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact</h1>
        <form onSubmit={submitForm}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={nameText}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailText}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={messageText}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <div className="button-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
          {status === 'SUCCESS' ? (
            <p className="email-success">Thanks!</p>
          ) : status === 'ERROR' && (
            <p className="error">Oops! There was an error.</p>
          )}
        </form>
      </div>
      <div className="social-links">
        <a href="https://github.com/SachiTeaCoder" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Github Logo" width="40px" />
        </a>
        <a href="https://www.linkedin.com/in/sachin-pattar/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="Linkedin Logo" width="40px" />
        </a>
      </div>
    </div>
  );
}

export default Contact;