import React from 'react'

const LocationInfo = ({ location }) => {
  return (
    <article className='Information'>
      <h2 className='information_title'>{location?.name}</h2>
      <ul className='information_sub'>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Id: </span>{location?.id}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default LocationInfo