import React from "react";
import CardImage from "./CardImage.jsx";
import ReactDOM from "react-dom";

//Smoke test - Check whether CardImage component renders image with a url
test("loading-poster", () => {
	const testURL =
		"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg";
	const img = document.createElement("img");
	ReactDOM.render(<CardImage url={testURL} />, img);
});
