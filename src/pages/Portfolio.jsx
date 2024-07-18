import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Portfolio() {
    return (
      <div className="container">
        <h2>Portfolio and Resume</h2>
        <p>
        Here are some of the projects I've worked on in the past year. Click on the links to view more information about each project. Other projects can be found on my GitHub or <a href="resume.pdf" target="_blank" download = "resume.pdf">resume</a>.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/200x100" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Agri:AI; SEM Analysis</h5>
                <p className="card-text">Created for OU's AGRI:AI competition in Spring 2024, this project analyzes upwards of two decades of satellite data to help farmers understand what details about the weather affect their crops.</p>
                <Link to="#" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/200x100" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">KYPer: Know Your Producer</h5>
                <p className="card-text">KYPer was created as a one-semester group project. Its purpose is to help consumers shop locally and find replacements for products that are typically bought from corporately-owned companies.</p>
                <Link to="#" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/200x100" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">OLYMPUS</h5>
                <p className="card-text">OLYMPUS was the result of a 24-hour hackathon and 3 sophomore-year coders. Its goal is to put a new twist on the classic "beat-em-up" style game in which an 80s-era Olympic God Ares is working to destroy the city.</p>
                <Link to="#" className="btn btn-primary">View Project</Link>
              </div>
            </div>
          </div>

          </div>
      </div>
    );
  }

  export default Portfolio;