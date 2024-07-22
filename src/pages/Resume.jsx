import React from 'react';
import resume from '../assets/resume.pdf';

function Resume() {
  return (
    <div>
      <embed src={resume} width="100%" height="1000px" />
    </div>
  );
}

export default Resume;
