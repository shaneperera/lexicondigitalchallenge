/* PageNotFound.jsx
This file handles the creation of a generic 404 page to catch unwanted routes in the DOM.  
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
	/*
    Create react component that displays a generic 404 page

    Args:
      N/A

    Returns:
      Error page with link back to home page
  */
	return (
		<div className="pageNotFound-container">
			<h3>Oops! Page not found</h3>
			<h1>404</h1>
			<p>We can't find the page you were looking for.</p>
			<Link to={"/"} className="error-go-home-link">
				Go back home
			</Link>
		</div>
	);
}

export default PageNotFound;
