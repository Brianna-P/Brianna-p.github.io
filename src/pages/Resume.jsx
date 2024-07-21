import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './Header';

function Resume() {
  return (
    <>
    <div className="container">
      <div className="mt-4 mb-4">
        <Button variant="secondary" href="resume.pdf" download>Download Resume</Button>
      </div>
      <div style={{ width: '100%', height: '600px' }}>
        <object
          data="resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>This browser does not support PDFs. Please download the PDF to view it.</p>
        </object>
      </div>
    </div>
    </>
  );
}

export default Resume;
