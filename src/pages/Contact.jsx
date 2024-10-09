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

  return (
    <>
      <div className="about-section">
        <section className="container py-3">
          <div className="row justify-content-between mt-5">
            <div className="col-md-5 text-start">
              <h5> (A Litte More) About Me</h5>
              <p>
              In my free time I develop personal projects, play video games, and
              hang out with my friends. My current interests in the CS world are
              UI/UX enhancement and innovative use of artificial intelligence. Thanks for visiting my page!
             I'm looking forward to connecting and collaborating on exciting projects.
              </p>
            </div>

            <div className="col-md-5 text-center">
              <h5>Looking to get in contact with me? Select an option below! Contact form coming soon{loadingText}</h5>
              <h5 style={{fontSize: '1.2em' }}>In the meantime, select a button below to access my related links.</h5>

              <div className="row">
                <div className="col text-center">
                  <span className="link" onClick={copyEmailToClipboard}>
                    <img src={emailIcon} alt="Email" className="rounded-circle img-fluid w-50 h-auto mt-2" />
                  </span>
                  <p>Email</p>
                </div>
                <div className="col text-center">
                  <a href="https://www.linkedin.com/in/brianna-patten-9a42ba290/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInIcon} alt="LinkedIn" className="rounded-circle img-fluid w-50 h-auto mt-2" />
                  </a>
                  <p>LinkedIn</p>
                </div>
                <div className="col text-center">
                  <a href="https://github.com/Brianna-P" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="rounded-circle img-fluid w-50 h-auto mt-2" />
                  </a>
                  <p>GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
