/* FetchMovieList.jsx
This file handles the retrievel and presentation of movies now showing at cinemaWorld & filmWorld
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
import { Link } from 'react-router-dom';

export const url = {
  cinemaWorld: "https://challenge.lexicondigital.com.au/api/cinemaworld",
  filmWorld: "https://challenge.lexicondigital.com.au/api/filmworld"
};
export const headers = {
  'x-api-key': "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"
};

function useFetchMovieList(){
  /*
    Fetches an array of movie objects from both cinemaWorld and FilmWorld

    Args:
      N/A

    Returns:
      Custom object containing key, title, IDs and Poster
      isLoading boolean
      error response
  */
  const [movieObject, setMovieObject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=> {
    setIsLoading(true)
    const fetchData = () => {
      const cinemaWorldURL = `${url.cinemaWorld}/movies`;
      const filmWorldURL = `${url.filmWorld}/movies`;
      
      Promise.all([
        Axios.get(cinemaWorldURL, {headers}),
        Axios.get(filmWorldURL, {headers}) 
      ])
      .then(([data1, data2]) => {
        data1 = data1.data.Movies;
        data2 = data2.data.Movies;
        const combinedObj= [];
        data1.forEach((val, index) => {
          //Create custom array of objects
          combinedObj.push({
            key: index,
            Title: val.Title,
            cinemaWorldId: val.ID,
            filmWorldId: data2[index].ID,
            Poster: val.Poster
          })
        });
        console.log(combinedObj);
        setMovieObject(combinedObj);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Oops! There has been an error fetching the movies. Please refresh the page.");
      })
    };
    fetchData();
  }, []);

  return {movieObject, isLoading, error}
}

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
  const {movieObject, isLoading, error} = useFetchMovieList();

  if (error) {
    return (
      <p>{error}</p>
    )
  }

  if (isLoading) {
    return (
      <Loader></Loader>
    )
  }

  return (
    <ul>
      {movieObject.map(movie => {
        return (
          <li className="photo-container" key={movie.key}>
            <Link to={{
              pathname:`/movie/${movie.Title}/`,
              state: {ID_C: movie.cinemaWorldId, ID_F: movie.filmWorldId}
              }} className="photo-link"
            >
              <PosterContainer movie={movie} />
            </Link>
          </li>
        )
      })}
    </ul>
  );
}

export default FetchMovieList