/* FetchMovie.jsx
This file handles the retrieval and presentation of a movie object after user selection.
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PosterContainer from './PosterContainer.jsx';
import Loader from './Loader.jsx';
import {url, headers} from './FetchMovieList';

function useFetchMovie(ID_C, ID_F){
  /*
    Fetches a movie object that corresponds to user selection on home page.

    Args:
      N/A

    Returns:
      Movie object from cinemaWorld (for price)
      Movie object from filmWorld (for price)
      isLoading boolean
      error response
  */
  
  const [cinemaWorldObject, setCinemaWorldObject] = useState({});
  const [filmWorldObject, setFilmWorldObject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=> {
    setIsLoading(true)
    const fetchData = () => {
      const cinemaWorldURL = `${url.cinemaWorld}/movie/${ID_C}`;
      const filmWorldURL = `${url.filmWorld}/movie/${ID_F}`;
      
      Promise.all([
        Axios.get(cinemaWorldURL, {headers}),
        Axios.get(filmWorldURL, {headers}) //CHECK THIS
      ])
      .then(([data1, data2]) => {
        setCinemaWorldObject(data1.data);
        setFilmWorldObject(data2.data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Oops! There has been an error fetching the movies. Please refresh the page.");
      })
    };
    fetchData();
  }, [ID_C, ID_F]);

  return {cinemaWorldObject, filmWorldObject, isLoading, error}
}

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
      <p>{error}</p>
    )
  }

  if (isLoading) {
    return(
      <Loader></Loader>
    )
  }

  return(
    <div>
      <div>
        <PosterContainer movie={cinemaWorldObject} />
      </div>
      <ul>
        <li>Cinemaworld: ${cinemaWorldObject.Price}</li>
        <li>FilmWorld: ${filmWorldObject.Price}</li>
      </ul>
    </div>
  )
}

export default FetchMovie