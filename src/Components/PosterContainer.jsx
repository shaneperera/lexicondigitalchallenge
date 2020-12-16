/* PosterContainer.jsx
This file creates a container to display the movie poster & title
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from 'react';
import Poster from './Poster.jsx';

function PosterContainer(props) {
  /*
    Create a react component that displays the movie poster & title

    Args:
      props: Movie object returned from UseMoviesFetcher()

    Returns:
      Container including image & title
  */
  return(
    <div>
    <Poster url={props.movie.Poster} />
    <p className="photo-title">{props.movie.Title}</p>
    </div>
  );
}

export default PosterContainer