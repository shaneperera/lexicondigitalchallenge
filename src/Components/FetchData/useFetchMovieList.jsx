/* useFetchMovieList.jsx
This file creates a useEffect hook to render content on the home page (when component mounts)
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {url, headers} from './FetchMovieList';

function useFetchMovieList() {
  /*
    Creates a custom object that returns information about each movie in list

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

  useEffect(() => {
    setIsLoading(true)
    const fetchData = () => {
      const cinemaWorldURL = `${url.cinemaWorld}/movies`;
      const filmWorldURL = `${url.filmWorld}/movies`;

      Promise.all([
        Axios.get(cinemaWorldURL, { headers }),
        Axios.get(filmWorldURL, { headers })
      ])
        .then(([data1, data2]) => {
          data1 = data1.data.Movies;
          data2 = data2.data.Movies;
          const combinedObj = [];
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
          setError("There has been an error fetching the movies. Please refresh the page.");
        })
    };
    fetchData();
  }, []);

  return { movieObject, isLoading, error }
}

export default useFetchMovieList