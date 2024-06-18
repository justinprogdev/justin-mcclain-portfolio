import React, { useEffect, useState } from 'react';
import './Interests.css';

interface InterestsData {
  title: string;
  tagline: string;
  "Favorite Authors": string[];
  "Favorite Programming Languages": string[];
}

// Define my interests function component. 
const Interests: React.FC = () => {
  // Interest Data State. 
  const [interestsData, setInterestsData] = useState<InterestsData | null>(null);

  // Loading State. 
  const [loading, setLoading] = useState(true);

  // Error state. 
  const [error, setError] = useState<Error | null>(null);

  // On mount.
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get site data.  
        const response = await fetch('/site-data.json');
        
        // If not successful, throw. 
        if (!response.ok) throw new Error('Network response was not ok');

        // Otherwise set the interest data state - SetStateAction. 
        const data = await response.json();
        setInterestsData(data.interestsData);
      
        // If error set error state. 
      } catch (error) {
        console.error('Error fetching the site data:', error);
        setError(error as Error);
      
        // finally (always fires) set Loading State.
      } finally {
        setLoading(false);
      }
    };
    // Run the fetch. 
    fetchData();
  }, []);

  // If loading state is true, render loading message.
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // If error state, render error message.
  if (error) {
    return <div className="error">Error loading data: {error.message}</div>;
  }

  return (
    // Map our interest data and render to each section. 
    <div className="interests">
      
      <h1>{interestsData?.title}</h1>
      <p className="tagline">{interestsData?.tagline}</p>

      {/* Authors section */}
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
      
      {/* Programming languages section */}
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