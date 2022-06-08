//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 1; // What does each second represent

const timer = setInterval(
	() => {
		if (seconds === 999999) {
			// This function tells what happens when counter hits 999999
			clearInterval(timer);
		}
		ReactDOM.render(<Home />, document.querySelector("#app")); // Calls the Home jsx to user front renders home every second
		seconds++; //This will add 1 to the seconds
	},
	1000 //Will run every second
);
