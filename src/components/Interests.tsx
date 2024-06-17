import React, { useEffect, useState } from 'react';
import './Interests.css';

interface InterestsData {
  title: string;
  tagline: string;
  "Favorite Authors": string[];
  "Favorite Programming Languages": string[];
}

const Interests: React.FC = () => {
  const [interestsData, setInterestsData] = useState<InterestsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/site-data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setInterestsData(data.interestsData);
      } catch (error) {
        console.error('Error fetching the site data:', error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error loading data: {error.message}</div>;
  }

  return (
    <div className="interests">
      <h1>{interestsData?.title}</h1>
      <p className="tagline">{interestsData?.tagline}</p>
      <div className="section">
        <h2>Favorite Authors</h2>
        <ul className="interests-list">
          {interestsData?.["Favorite Authors"].map((author, index) => (
            <li key={index}>
              <i className="fas fa-book" aria-hidden="true"></i> <span>{author}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Favorite Programming Languages</h2>
        <ul className="interests-list">
          {interestsData?.["Favorite Programming Languages"].map((language, index) => (
            <li key={index}>
              <i className="fas fa-code" aria-hidden="true"></i> <span>{language}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Interests;