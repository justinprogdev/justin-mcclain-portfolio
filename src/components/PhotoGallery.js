import React from 'react';
import './PhotoGallery.css';  // Import the CSS file

function PhotoGallery() {
  return (
    <div className="photo-gallery">
      <div className="photo-item">
        <img src="path-to-your-image1.jpg" alt="Description 1" />
        <p>Description 1</p>
      </div>
      <div className="photo-item">
        <img src="path-to-your-image2.jpg" alt="Description 2" />
        <p>Description 2</p>
      </div>
      <div className="photo-item">
        <img src="path-to-your-image3.jpg" alt="Description 3" />
        <p>Description 3</p>
      </div>
      {/* Add more photo items as needed */}
    </div>
  );
}

export default PhotoGallery;
