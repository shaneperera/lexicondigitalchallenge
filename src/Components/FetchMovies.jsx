/* FetchMovies.jsx
This file handles the retrievel and presentation of movies now showing at cinemaWorld & filmWorld
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import PosterContainer from './PosterContainer.jsx';
import {Link} from 'react-router-dom';

export const url = {
  cinemaWorld: "https://challenge.lexicondigital.com.au/api/cinemaworld",
  filmWorld: "https://challenge.lexicondigital.com.au/api/filmworld"
};
export const headers = {
  'x-api-key': "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"
};

function UseMoviesFetcher() {
  /*
    Fetches an array of movie objects from API

    Args:
      N/A

    Returns:
      Array of movie objects
      isLoading boolean
      error response
  */

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true); 
    const cinemaWorldURL = `${url.cinemaWorld}/movies`;
    Axios.get(cinemaWorldURL, {headers})
    .then(res => {
      console.log(res.data)
      setMovies(res.data.Movies);
      setIsLoading(false);
    })
    .catch(error => {
      setError("Oops! There has been an error fetching the movies. Please refresh the page.");
    })
  }, [])

  return {movies, isLoading, error}; 
}

function FetchMovies() {
  /*
    Destructures the response from UseMoviesFetcher() display a list of movies now showing at both cinemaWorld & filmWorld

    Args:
      N/A

    Returns:
      Array of movie objects
      isLoading boolean
      error response
  */
  const {movies, isLoading, error} = UseMoviesFetcher();

  if (error) {
    return(
      <p>{error}</p>
    )
  }

  if (isLoading) {
    return(
      <p>Fetching the list of movies.</p>
    )
  }

  return(
    <div>
      <ul>
        {movies.map(movie => {
          return(
            <li className="photo-container" key={movie.ID}>
              <Link to={`/movie/${movie.ID}/`} className="photo-link">
                <PosterContainer movie={movie} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default FetchMovies