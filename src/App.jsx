import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom';
import CountryCard from './components/CountryCard';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,currencies,languages')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Router>
      <div>
        <h1>Pays</h1>
        <Routes>
          <Route 
            exact 
            path="/" 
            element={
              <div className="country-list">
                {countries.map((country, index) => (
                  <Link to="/details" onClick={() => handleCountryClick(country)} key={index}>
                    <CountryCard country={country} />
                  </Link>
                ))}
              </div>
            } 
          />
          <Route 
            path="/details" 
            element={selectedCountry && <CountryDetails country={selectedCountry} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
