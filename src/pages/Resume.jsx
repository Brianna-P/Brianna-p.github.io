import React, { useState } from 'react';
import resume from '../assets/resume.pdf';

function Resume() {
  const [error, setError] = useState(false);

  const handleLoadError = () => {
    setError(true);
  };

  return (
    <div>
      {!error ? (
        <embed src={resume} width="100%" height="1000px" onError={handleLoadError} />
      ) : (
        <p>PDF could not be displayed. Please be sure to open on non-mobile browser, or try with a different browser.</p>
      )}
    </div>
  );
}

export default Resume;
