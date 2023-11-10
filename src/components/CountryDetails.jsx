import React from 'react';

export default function CountryDetails({ country }) {
  const langue = Object.values(country.languages || {}).join(', ');
  const monnaie = Object.values(country.currencies || {}).map(currency => currency.name).join(', ');
  return (
    <div>
    <img src={country.flags.svg} alt={`${country.name.common} flag`} />
    <p>Capital: {country.capital} </p>
    <p>Population: {country.population.toLocaleString()}</p>
    <p>Region: {country.region}</p>
    <p>Langue: {langue}</p>
    <p>Monnaie: {monnaie}</p>
    </div>
  );
}