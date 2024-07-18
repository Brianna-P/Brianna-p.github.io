import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import ImageService from "../lib/services/Image.service";
import "../App.css";
import Header from "./Header";

function About() {
  const images = ImageService.getAllImages();

  return (
    <>
    <Header />
    <div>
      <section className="about-section">
        <div className="container">
          <h2>About Me:</h2>
          <p>
            Hello! My name is Brianna Patten. I am a current student at the
            University of Oklahoma, where I'm studying to get my Bachelor's in
            Computer Science and my Master's in AI/Machine Learning and Data
            Analytics.
          </p>
          <p>
            In my free time I develop personal projects, play video games, and
            hang out with my friends. My current interests in the CS world are
            new machine learning algorithms, automation, and the impact of AI on
            economic regulation. Thanks for visiting my page!
          </p>
        </div>
      </section>

      <section className="bg-dark py-5">
        <div className="container" style={{ maxWidth: "600px" }}>
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.image}
                  alt={image.title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                 <h3 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{image.title}</h3>

                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>


    </div>
    </>
  );
}

export default About;
