/* useFetchMovie.jsx
This file creates a useEffect hook to return information about movie (based on ID) from each movie provider
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { url, headers } from "./FetchMovieList";

function useFetchMovie(ID_C, ID_F) {
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

	useEffect(() => {
		setIsLoading(true);
		const fetchData = () => {
			const cinemaWorldURL = `${url.cinemaWorld}/movie/${ID_C}`;
			const filmWorldURL = `${url.filmWorld}/movie/${ID_F}`;

			Promise.all([
				Axios.get(cinemaWorldURL, { headers }),
				Axios.get(filmWorldURL, { headers }), //CHECK THIS
			])
				.then(([data1, data2]) => {
					setCinemaWorldObject(data1.data);
					setFilmWorldObject(data2.data);
					setIsLoading(false);
				})
				.catch(() => {
					setError(
						"There has been an error fetching the movie. Please refresh the page."
					);
				});
		};
		fetchData();
	}, [ID_C, ID_F]);

	return { cinemaWorldObject, filmWorldObject, isLoading, error };
}

export default useFetchMovie;
