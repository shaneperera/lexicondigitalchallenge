/* CardImage.jsx
This file creates an image of a movie poster from a url
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from "react";

function CardImage(props) {
	/*
    Create a react component that displays a movie poster from a url (props)

    Args:
      props: url linked to poster

    Returns:
      Poster
  */
	return <img src={props.url} className="card-image" alt="" />;
}

export default CardImage;
