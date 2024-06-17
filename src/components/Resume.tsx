import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Trigger file download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>You may read my resume online, or download a PDF copy to keep with the button below. </p>
      <iframe src="/resume.pdf" title="Resume" className="resume-viewer" />
      <button onClick={handleDownload} className="download-button">Download Resume</button>
    </div>
  );
};

export default Resume;
