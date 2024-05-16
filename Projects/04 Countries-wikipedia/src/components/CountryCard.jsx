import React from 'react'


export default function CountryCard({ name, flag, population, region, capital }) {
  return (
    <div className='w-[200px] h-[300px] border'>
      <div className="w-[200px] h-[200px]">
        <img className='w-full h-full object-contain' src={flag} alt={name + ' Flag'} />
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </div>
  )
}