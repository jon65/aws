import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // State to store the data from the API call
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a call to localhost:3001
        const response = await fetch('http://localhost:3001/api');
        const data = await response.json();
        setApiData(data.test);
        console.log('Data from localhost:3001:', data);

      } catch (error) {
        console.error('Error fetching data from localhost:3001:', error);
        setApiData('error');
      }
    };

    // Call the async function
    fetchData();

  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {/* Render the API response on the screen */}
          {apiData ? `Data from API: ${apiData}` : 'Loading...'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
