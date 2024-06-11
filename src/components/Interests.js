import React, { useEffect, useState } from 'react';
import './Interests.css';

function Interests() {
  const [interestsData, setInterestsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/site-data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setInterestsData(data.interestsData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the site data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error loading data: {error.message}</div>;
  }

  return (
    <section className="interests-container">
      <h1 className="interests-title">{interestsData.title || 'Interests'}</h1>
      <p className="interests-tagline">{interestsData.tagline || 'Things I find interesting'}</p>
      <div className="interests-section">
        <h2>Favorite Authors</h2>
        <ul>
          {interestsData["Favorite Authors"].map((author, index) => (
            <li key={index}>
              <i className="fas fa-book" aria-hidden="true"></i> <span>{author}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="interests-section">
        <h2>Favorite Programming Languages</h2>
        <ul>
          {interestsData["Favorite Programming Languages"].map((language, index) => (
            <li key={index}>
              <i className="fas fa-code" aria-hidden="true"></i> <span>{language}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Interests;
