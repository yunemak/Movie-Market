import { useState, useEffect } from "react";
import "./App.css";

function Card({ title }) {
	const [count, setCount] = useState(0);
	const [hasLiked, setHasLiked] = useState(false);

	useEffect(() => {
		console.log(`${title} has been: ${hasLiked ? "liked" : "disliked"}.`);
	}, [hasLiked]);

	return (
		<div
			className="card"
			onClick={() => setCount((prevState) => prevState + 1)}
		>
			<h3>
				{title} <br />
				{count}
			</h3>
			<button onClick={() => setHasLiked((prevState) => !prevState)}>
				{hasLiked ? "❤️" : "🤍"}
			</button>
		</div>
	);
}

export default Card;
