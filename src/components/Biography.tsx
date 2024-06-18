import React, { useEffect, useState } from "react";
import "./Biography.css";

// Define our data type to deserialize from our site-data.json
interface BiographyData {
  title: string;
  tagline: string;
  bio: string;
}

// Functional React component to render biography page
const Biography: React.FC = () => {

  // Biography data state
  const [biographyData, setBiographyData] = useState<BiographyData | null>(null);

  // Fetch bio data from json
  useEffect(() => {
    fetch("/site-data.json")
      .then((response) => response.json())

      // Parse as json with SetStateAction
      .then((data) => setBiographyData(data.biographyData))
      .catch((error) => console.error("Error fetching biography data:", error));
  }, []);

  // TSX renders bio UI
  return (
    <div className="biography">
      {/* If data is null, display loading */}
      {biographyData ? (
        <>
        {/* Display headshot image and interpolate biographyData */}
          <img src={`${process.env.PUBLIC_URL}/justin.png`} alt="A headshot of Justin McClain" />
          <h1>{biographyData.title}</h1>
          <p className="tagline">{biographyData.tagline}</p>
          <p className="bio">{biographyData.bio}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Biography;