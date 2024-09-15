"use client"; // Add this at the top

import React, { useState, useEffect } from "react";

export default function Home() {
  const [apiData, setApiData] = useState(null); // To store API data
  const [error, setError] = useState(null); // To store any fetch errors
  const [stage, setStage] = useState(0); // To manage the reveal stage
  const [searchTerm, setSearchTerm] = useState(""); // For search box input

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

  const handleSearch = () => {
    // Call an API endpoint to search the anime based on searchTerm (implement API logic accordingly)
    console.log('Searching for:', searchTerm);
    // Reset stage if a new search is made
    setStage(0);
  };

  const handleSkip = () => {
    // Logic to skip the current anime and fetch the next one
    console.log('Skipping current anime');
    // Reset the stage and fetch a new anime
    setStage(0);
    // Call an API to fetch the next anime (not implemented in this snippet)
  };

  // Function to mask the anime name based on the current stage
  const maskName = (name, stage) => {
    if (!name) return '';

    if (stage === 0) {
      return '*'.repeat(name.length); // Fully masked
    }

    if (stage === 1) {
      // Reveal the first letter of each word
      return name
        .split(' ')
        .map(word => word[0] + '*'.repeat(word.length - 1))
        .join(' ');
    }

    if (stage >= 4) {
      return name; // Fully revealed only at stage 4 or beyond
    }

    // In stages 2 and 3, we still want to show the masked name from stage 1
    return name
      .split(' ')
      .map(word => word[0] + '*'.repeat(word.length - 1))
      .join(' ');
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
            <p className="text-3xl text-center font-bold mb-3">{maskName(apiData.name, stage)}</p>
            {stage >= 2 && <p>Genre: {apiData.genre}</p>} {/* Reveal genre at stage 2 */}
            {stage >= 3 && <p>Ranking: {apiData.ranking}</p>} {/* Reveal ranking at stage 3 */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* <div className="flex justify-center my-5">
        <button className="bg-sky-500 text-white px-4 py-2 rounded" onClick={incrementStage}>Reveal More</button>
      </div> */}

      {/* Search box and buttons */}
      <div className="flex flex-col items-center my-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search anime..."
          className="placeholder:italic placeholder:text-slate-400 block bg-slate-900 border text-sky-50 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <div className="flex space-x-4 mt-4">
          <button className="bg-sky-500 text-white px-4 py-2 rounded" onClick={handleSearch}>Submit</button>
          <button className="border-solid border-2 border-sky-500 text-white px-4 py-2 rounded" onClick={incrementStage}>Skip</button>
        </div>
      </div>

      <div className="text-center mt-4">
        <h1>Current Stage: {stage}</h1>
      </div>
    </div>
  );
}
