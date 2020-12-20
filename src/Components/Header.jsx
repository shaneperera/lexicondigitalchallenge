/* Header.jsx
This file creates the header component on each page.
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from 'react'

function Header() {
  /*
    Create react component that displays the page header.

    Args:
      N/A

    Returns:
      Page header
  */
  return(
    <header className="site-header">
      <h1>
        PRINCE'S THEATRE 
        <div className="site-header-subtitle">
          Classic Movies At Home
        </div>
      </h1>
    </header>
  );
}

export default Header