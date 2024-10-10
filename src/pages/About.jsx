import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import ImageService from "../lib/services/Image.service";
import "../App.css";

function About() {
  const images = ImageService.getAllImages();

  return (
    <>
      <div>
        <section className="about-section">
          <div className="container">
            <h2 style={{ marginTop: "60px"}}>Hi, I'm </h2>
            <h3>Brianna Patten.</h3>
            <p className="mb-5 ">
              I am a current 3rd year at the University of Oklahoma, where I'm studying to get my Bachelor's in
              Computer Science and my Master's in AI and Machine Learning.
            </p>
            <div className="row" style={{alignItems: "center" }}>
              <div className="col-sm-3">
                <div className="button-container" style={{ display: 'flex', flexDirection: 'column', height: '350px' }}>
                  <button
                   className="btn btn-primary rounded"
                    style={{ backgroundColor: '#007bff', border: 'none', width: '100%', height: '130px' }}
                    onClick={() => window.open(`${window.location.origin}/#/contact`, "_blank")}
                    >
                    
                    Contact + Learn More
                  </button>
                  
                  <button 
                  className="btn btn-primary rounded" 
                  style={{width: '100%', height: '130px' }}
                  onClick={() => window.open(`${window.location.origin}/#/portfolio`, "_blank")}
                  >
                    Portfolio + Resume
                  </button>

                  <button href="https://github.com/your-username" 
                  className="btn btn-primary rounded" 
                  style={{width: '100%', height: '130px' }}
                  onClick={() => window.open("https://github.com/Brianna-P", "_blank")}
                  >
                    Github
                  </button>
             
                </div>
              </div>
              <div className="col-sm-9 mb-5">
                <Carousel style={{ width: "auto", height: "350px"}}>
                  {images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image.image}
                        alt={image.title}
                        style={{ height: "400px", objectFit: "cover", borderRadius: '10px',}} 
                        
                      />
                      <Carousel.Caption>
                        <h4>
                          {image.title}
                        </h4>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
