import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import ipalImage from '../assets/IPAL.jpeg';
import kyperImage from '../assets/KYPer Logo.png';
import agriImage from '../assets/farm.jpeg';


function Portfolio() {
  return (
    <>
      <section className="about-section">
        <div className="container ">
          <h5 className="text-center" style={{ fontSize: '2.5rem' }}>
            Portfolio and Resume
          </h5>
          <h5 className="text-center ms-5 me-5 mb-4" style={{ fontSize: '1.1rem', marginLeft: '50px', marginRight: '50px' }}>
            Here are some of the projects I've worked on in the past year. Click
            on the links to view more information about each project. Other
            projects can be found on my GitHub, or
            <Link
              className="nav-link text-primary text-decoration-underline"
              to="/resume"
              style={{ display: "inline-block", marginLeft: "5px" }}
            >
              view my resume
            </Link>
            .
          </h5>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 gradient-card">
                <img
                  src={ipalImage}
                  className="card-img-top"
                  alt="I:PAL"
                />
                <div className="card-body">
                  <h5 className="card-title">I:PAL</h5>
                  <p className="card-text">
                    This was created in 24 hours at HackMIT 2024. I:PAL hopes to be the first-ever 
                    commercial use speech-to-phonetics training app. It uses Wav2Vec to translate vocals to
                    their corresponding phoneme, allowing for real-time feedback of word pronunciation.
                  </p>
                  <a
                    href="https://github.com/lucasBent/hackmit"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 gradient-card">
                <img
                  src={agriImage}
                  className="card-img-top"
                  alt="Agri:AI; SEM Analysis"
                />
                <div className="card-body">
                  <h5 className="card-title">Agri:AI; SEM Analysis</h5>
                  <p className="card-text">
                    Created for OU's AGRI:AI competition in Spring 2024, this
                    project analyzes upwards of two decades of satellite data to
                    help farmers understand what details about the weather affect
                    their crops.
                  </p>
                  <Link to="#" className="btn btn-warn" style={{ background: "#2f4f4f" }}>
                    Project cannot be viewed due to sensitive data. Please contact me for more information.
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 gradient-card">
                <img
                  src={kyperImage}
                  className="card-img-top"
                  alt="KYPer: Know Your Producer"
                />
                <div className="card-body">
                  <h5 className="card-title">KYPer: Know Your Producer</h5>
                  <p className="card-text">
                    KYPer was created as a one-semester group project. Its purpose
                    is to help consumers shop locally and find replacements for
                    products that are typically bought from corporately-owned
                    companies.
                  </p>
                  <a
                    href="https://github.com/logbasem/Software_Engineering"
                    className="btn btn-primary" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
