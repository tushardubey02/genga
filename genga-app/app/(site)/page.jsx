"use client"; // Add this at the top

import React, { useState, useEffect } from "react";

export default function Home() {
  const [apiData, setApiData] = useState(null); // To store API data
  const [error, setError] = useState(null); // To store any fetch errors

  // Fetch data when component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5000/get_data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setApiData(data)) // Set the fetched data to state
      .catch(error => setError(error)); // Handle any errors
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <div className="flex text-sky-300 hover:text-sky-100 text-7xl font-bold content-center justify-center my-3">
        Genga
      </div>

      <div className="flex justify-center text-sky-50 text-xl font-medium">
        <p>Guess the anime based on the given clues!</p>
      </div>
      
      {/* Display fetched API data */}
      <div className="flex justify-center text-sky-50 text-xl font-medium" id="api-data">
        {error && <p>Error fetching data: {error.message}</p>}
        {apiData ? (
          <div>
            <p>Name: {apiData.name}</p>
            <p>Ranking: {apiData.ranking}</p>
            <p>Status: {apiData.status}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}
