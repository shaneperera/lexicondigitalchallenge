/* FetchMovie.jsx
This file handles the retrieval and presentation of a movie object after user selection.
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from 'react';
import useFetchMovie from './useFetchMovie'
import Card from '../Card/Card.jsx';
import Loader from '../Loader.jsx';

function FetchMovie(props) {
  /*
    Destructures the response from useFetchMovie() to extract the price of movie being shown at cinemaWorld and filmWorld.

    Args:
      N/A

    Returns:
      Display poster of film & price comparison between theatres
  */

  const ID_C = props.ID_C
  const ID_F = props.ID_F
  const {cinemaWorldObject, filmWorldObject, isLoading, error} = useFetchMovie(ID_C, ID_F)

  if (error) {
    return(
      <div className="error-message-container">
        <h1>Oops!</h1>
        <p className="error-message">{error}</p>
      </div>
    )
  }

  if (isLoading) {
    return(
      <Loader/>
    )
  }

  return(
    <div className="movie-page-content">
      <Card movie={cinemaWorldObject} />
      <div className="price-comparison">
        <p>CinemaWorld: ${cinemaWorldObject.Price}</p>
        <p>FilmWorld: ${filmWorldObject.Price}</p>
      </div>
    </div>
  )
}

export default FetchMovie