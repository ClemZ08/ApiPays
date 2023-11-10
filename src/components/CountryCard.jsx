import React from 'react'

export default function CountryCard(props) {
  const {country} = props
  return (
    <div className="country-card">
    <h2>{country.name.common}</h2>
    <img src={country.flags.svg} alt={`${country.name.common} flag`}/>
    <p>Capital: {country.capital} </p>
    <p>Population: {country.population.toLocaleString()}</p>
    <p>Region: {country.region}</p>
  </div>
  )
}
