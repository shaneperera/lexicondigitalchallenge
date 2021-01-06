/* Footer.jsx
This file creates the footer component on each page.
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from "react";

function Footer() {
	/*
    Create react component that displays the page footer.

    Args:
      N/A

    Returns:
      Page footer
  */
	return (
		<div className="site-footer">
			<p className="site-footer-text">
				&copy;{new Date().getFullYear()} Designed by Shane Perera
			</p>
		</div>
	);
}

export default Footer;
