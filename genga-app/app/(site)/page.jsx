"use client"; // Add this at the top

import React, { useState, useEffect } from "react";

export default function Home() {
  const [apiData, setApiData] = useState(null); // To store API data
  const [error, setError] = useState(null); // To store any fetch errors

  // Fetch data when component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5000/anime')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setApiData(data)) // Set the fetched data to state
      .catch(error => setError(error)); // Handle any errors
  }, []); // Empty dependency array to run only once when the component mounts

  const [stage, setStage] = useState(0);

  const incrementStage = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/increment_stage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setStage(data.stage);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="flex text-sky-300 hover:text-sky-100 text-7xl font-bold content-center justify-center my-3">
        Genga
      </div>

      <div className="flex justify-center text-sky-50 text-xl font-medium my-3 italic">
        <p>Guess the anime based on the given clues!</p>
      </div>
      
      {/* Display fetched API data */}
      <div className="flex justify-center text-sky-50 text-xl font-normal" id="api-data">
        {error && <p>Error: {error.message}</p>}
        {apiData ? (
          <div>
            <p className="text-3xl text-center font-bold mb-3">{apiData.name}</p>
            <p>Ranking: {apiData.ranking}</p>
            <p>Genre: {apiData.genre}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <div>
        <h1>Current Stage: {stage}</h1>
        <button onClick={incrementStage}>Increment Stage</button>
      </div>
    </div>
  );
}
