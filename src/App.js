/* App.js
This file handles the app startup (mainly routing)
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from 'react';
import './App.css';
import HomePage from './Components/HomePage.jsx';
import MoviePage from './Components/MoviePage.jsx';
import PageNotFound from './Components/PageNotFound.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Core app component 
function App() {
  return (
    <Router>
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id/" component={MoviePage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App; 