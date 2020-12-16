/* index.js
This file handles app startup
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements for the Necessary Components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Render the app into the React DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
