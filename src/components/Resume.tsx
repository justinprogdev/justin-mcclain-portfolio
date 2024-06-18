import React from 'react';
import './Resume.css';

// Create my resume component. 
const Resume: React.FC = () => {

  // Define fn for download. 
  const handleDownload = () => {

    // Create link for triggering file download. 
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Resume viewer section.
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>You may read my resume online, or download a PDF copy to keep with the button below. </p>
      
      {/* Iframe the resume for viewer to view without the need to download. */}
      <iframe src="/resume.pdf" title="Resume" className="resume-viewer" />
      
      {/* Download button. */}
      <button onClick={handleDownload} className="download-button">Download Resume</button>
    </div>
  );
};

export default Resume;
