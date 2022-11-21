import React from 'react'


const CardCountry = ({country}) => {

    

  return (
    <article className='card' >
        <img src = {country.coatOfArms.svg} className = "img" ></img>
        <h2>{country.name.official}</h2>
        <p>Capital: {country.capital[0]}</p>        
    </article>
  )
}

export default CardCountry