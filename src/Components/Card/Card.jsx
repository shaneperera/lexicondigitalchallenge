/* Card.jsx
This file creates a container to display the movie poster & title
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from "react";
import CardImage from "./CardImage.jsx";

function Card(props) {
	/*
    Create a react component that displays the movie poster & title

    Args:
      props: Movie object returned from UseMoviesFetcher()

    Returns:
      Container including image & title
  */
	return (
		<div className="card">
			<CardImage url={props.movie.Poster} />
			<div className="card-title-container">
				<p className="card-title">{props.movie.Title}</p>
			</div>
		</div>
	);
}

export default Card;
