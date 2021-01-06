/* App.js
This file handles the app startup (mainly routing)
Author(s):
    Shane Perera
Date Created:
    December 15th, 2020
*/

//Import Statements
import React from "react";
import "normalize.css";
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import HomePage from "./Components/Pages/HomePage.jsx";
import MoviePage from "./Components/Pages/MoviePage.jsx";
import PageNotFound from "./Components/Pages/PageNotFound.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Core app component
function App() {
	return (
		<div className="page-container">
			<div className="content-wrap">
				<div>
					<Header />
				</div>
				<Router>
					<Switch>
						<Route exact path={"/"} component={HomePage} />
						<Route exact path={"/movie/:title/"} component={MoviePage} />
						<Route component={PageNotFound} />
					</Switch>
				</Router>
			</div>
			<Footer />
		</div>
	);
}

export default App;
