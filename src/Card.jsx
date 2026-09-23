import { useState, useEffect } from "react";
import "./App.css";

function Card({ title }) {
	const [hasLiked, setHasLiked] = useState(false);

	useEffect(() => {
		console.log(`${title} has been: ${hasLiked ? "liked" : "disliked"}.`);
	});

	return (
		<div className="card">
			<h3>{title}</h3>
			<button onClick={() => setHasLiked(!hasLiked)}>
				{hasLiked ? "❤️" : "🤍"}
			</button>
		</div>
	);
}

export default Card;
