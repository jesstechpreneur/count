import React from "react";
import { Counter } from "../component/counter.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<h1 className="text-center mt-5">Simple Timer</h1>
			<Counter />
		</div>
	);
};

export default Home;
