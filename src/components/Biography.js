import React, { useEffect, useState } from 'react';
import './Biography.css';

function Biography() {
  const [biographyData, setBiographyData] = useState({});

  useEffect(() => {
    fetch('/site-data.json')
      .then(response => response.json())
      .then(data => setBiographyData(data.biographyData))
      .catch(error => console.error('Error fetching biography data:', error));
  }, []);

  return (
    <div className="biography">
      <h1>{biographyData.title}</h1>
      <p className="tagline">{biographyData.tagline}</p>
      <p className="bio">{biographyData.bio}</p>
    </div>
  );
}

export default Biography;
