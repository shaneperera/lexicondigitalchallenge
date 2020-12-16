/* HomePage.jsx
This file creates the landing (home) page of the app.
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from 'react';
import Header from './Header.jsx';
import FetchMovies from './FetchMovies.jsx'; //Search in components directory

function HomePage() {
  /*
    Create react component that displays the home page

    Args:
      N/A

    Returns:
      Creates page header, page description and adds FetchMovies() component to display the list of movies now showing at both theatres.
  */
  return(
    <>
      <Header />
      <p>Classic Movies At Home</p>
      <p>Now showing</p>
      <FetchMovies/>
    </>
  );
}

export default HomePage