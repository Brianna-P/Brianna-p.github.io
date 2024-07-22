import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailIcon from '../assets/email_icon.png';
import linkedInIcon from '../assets/linkedin_icon.jpeg';
import githubIcon from '../assets/github_icon.png';


function Contact() {
  const copyEmailToClipboard = () => {
    const email = 'brianna.patten@ou.edu';
    navigator.clipboard.writeText(email);
    alert('Email (brianna.patten@ou.edu) copied to clipboard!');
  };

  const [loadingText, setLoadingText] = useState('...');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prevText =>
        prevText === '...' ? '.' :
        prevText === '.' ? '..' :
        prevText === '..' ? '...' : '.'
      );
    }, 500);

    return () => clearInterval(interval); 
  }, []); 


  /*const handleSubmit = async (event) => {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = { name, email, message };

    try {
      const response = await fetch('https://api???/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };*/

  return (
    <>
    <div>
      <section className="container py-3">
        <div className="row justify-content-center mb-5 mt-5 text-center">
        <h2> Looking to get in contact with me? Select an option below! Contact form coming soon{loadingText}</h2>
          <div className="col-md-4 text-center">
            <span className="link" onClick={copyEmailToClipboard}>
              <img src={emailIcon} alt="Email" className="rounded-circle img-fluid w-25 h-auto mb-4 mt-5" />
            </span>
            <p>Click the box for Email</p>
          </div>
          <div className="col-md-4 text-center">
            <a href="https://www.linkedin.com/in/brianna-patten-9a42ba290/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="LinkedIn" className="rounded-circle img-fluid w-25 h-auto mb-4 mt-5" />
            </a>
            <p>Click the box for LinkedIn</p>
          </div>
          <div className="col-md-4 text-center">
            <a href="https://github.com/Brianna-P" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="rounded-circle img-fluid w-25 h-auto mb-4 mt-5" />
            </a>
            <p>Click the box for GitHub</p>
          </div>
        </div>

      {/*  <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>*/}
      </section> 
  </div> 
  </>
  );
}

export default Contact;
