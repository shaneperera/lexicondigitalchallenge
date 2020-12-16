/* MoviePage.jsx
This file creates the landing (home) page of the app.
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import FetchMovieInfo from './FetchMovieInfo'

function MoviePage() {
  /*
    Create react component that displays the movie page

    Args:
      N/A

    Returns:
      Creates page header, back button (return to home page) and adds FetchMovieInfo() component to display movie poster and price comparison between theatres.
  */
  return(
    <div>
      <div>
        <Header />
      </div>
      <Link to="/" className="movie-page-back">Back</Link>
      <FetchMovieInfo />
    </div>
  );
}

export default MoviePage