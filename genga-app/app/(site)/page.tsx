import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <div>
      <div className=" flex text-slate-300 hover:text-sky-400 text-5xl font-semibold content-center justify-center m-3">
          Genga
      </div>
      <div className="flex justify-center text-slate-300 text-xl font-medium">
            Guess the anime based on the given clues!
      </div>
      {/* <body>
        <h1>RapidAPI Info</h1>
        <div id="api-data"></div>

        <script>
            // Use fetch to get the JSON data from the Python backend
            fetch('http://127.0.0.1:5000/get_data')
                .then(response => response.json()) // Parse JSON response
                .then(data => {
                    // Display data on the webpage
                    const apiDataDiv = document.getElementById('api-data');
                    apiDataDiv.innerHTML = `<p>Name: ${data.name}</p>
                                            <p>Description: ${data.description}</p>
                                            <p>Status: ${data.status}</p>`;
                })
                .catch(error => console.error('Error fetching data:', error));
        </script>
    </body> */}
    </div>
    
  );
}
