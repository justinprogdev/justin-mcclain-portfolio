import React, { useEffect, useState } from "react";
import "./Biography.css";

interface BiographyData {
  title: string;
  tagline: string;
  bio: string;
}

const Biography: React.FC = () => {
  const [biographyData, setBiographyData] = useState<BiographyData | null>(null);

  useEffect(() => {
    fetch("/site-data.json")
      .then((response) => response.json())
      .then((data) => setBiographyData(data.biographyData))
      .catch((error) => console.error("Error fetching biography data:", error));
  }, []);

  return (
    <div className="biography">
      {biographyData ? (
        <>
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