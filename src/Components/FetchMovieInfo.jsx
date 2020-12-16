/* FetchMovieInfo.jsx
This file handles the retrieval and presentation of a movie object after user selection.
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import PosterContainer from './PosterContainer.jsx';
import {url, headers} from './FetchMovies';

function useFetchMovieInfo(){
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

  const {id} = useParams();
  const [cinemaWorldObject, setCinemaWorldObject] = useState({});
  const [filmWorldObject, setFilmWorldObject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=> {
    setIsLoading(true)
    const fetchData = () => {
      const cinemaWorldURL = `${url.cinemaWorld}/movie/${id}`;
      const filmWorldURL = `${url.filmWorld}/movie/${id}`;
      
      Promise.all([
        Axios.get(cinemaWorldURL, {headers}),
        Axios.get(cinemaWorldURL, {headers}) //CHECK THIS
      ])
      .then((data) => {
        //console.log(data[0].data)
        //console.log(data[1].data)
        setCinemaWorldObject(data[0].data);
        setFilmWorldObject(data[1].data);
        setIsLoading(false);
      })
      .catch(error => {
        setError("Oops! There has been an error fetching the movies. Please refresh the page.");
      })
    };
    fetchData();
  }, [id]);

  return {cinemaWorldObject, filmWorldObject, isLoading, error}
}

function FetchMovieInfo() {
  /*
    Destructures the response from useFetchMovieInfo() to extract the price of movie being shown at cinemaWorld and filmWorld.

    Args:
      N/A

    Returns:
      Display poster of film & price comparison between theatres
  */

  const {cinemaWorldObject, filmWorldObject, isLoading, error} = useFetchMovieInfo()

  if (error) {
    return(
      <p>{error}</p>
    )
  }

  if (isLoading) {
    return(
      <p>Fetching the movie information.</p>
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

export default FetchMovieInfo