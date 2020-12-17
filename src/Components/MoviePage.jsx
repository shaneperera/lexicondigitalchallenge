/* MoviePage.jsx
This file creates the landing (home) page of the app.
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FetchMovie from './FetchMovie'

function MoviePage() {
  /*
    Create react component that displays the movie page

    Args:
      N/A

    Returns:
      Creates page header, back button (return to home page) and adds FetchMovie() component to display movie poster and price comparison between theatres.
  */

 const location = useLocation();
 const {ID_C, ID_F} = location.state;

  return(
    <div>
      <div>
        <Link to="/" className="movie-page-back">Back</Link>
      </div>
      <div>
        <FetchMovie ID_C ={ID_C} ID_F={ID_F} />
      </div>
    </div>
  );
}

export default MoviePage