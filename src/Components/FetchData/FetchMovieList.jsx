/* FetchMovieList.jsx
This file handles the retrievel and presentation of movies now showing at cinemaWorld & filmWorld
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.jsx';
import Loader from '../Loader.jsx';
import { Link } from 'react-router-dom';
import useFetchMovieList from './useFetchMovieList'
export const url = {
  cinemaWorld: "https://challenge.lexicondigital.com.au/api/cinemaworld",
  filmWorld: "https://challenge.lexicondigital.com.au/api/filmworld"
};
export const headers = {
  'x-api-key': "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"
};

function FetchMovieList() {
  /*
    Destructures the response from useFetchMovieList() display a list of movies now showing at both cinemaWorld & filmWorld

    Args:
      N/A

    Returns:
      Array of movie objects
      isLoading boolean
      error response
  */
  const { movieObject, isLoading, error } = useFetchMovieList();

  if (error) {
    return(
      <div className="error-message-container">
        <h1>Oops!</h1>
        <p className="error-message">{error}</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <Loader/>
    )
  }

  return (
    <div>
      <ul className="responsive-list">
        {movieObject.map(movie => {
          return (
            <li className="list-component" key={movie.key}>
              <Link to={{ pathname: `/movie/${movie.Title}/`, state: { ID_C: movie.cinemaWorldId, ID_F: movie.filmWorldId } }} className="list-link">
                <Card movie={movie} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default FetchMovieList