import { useState } from "react";
import "./App.css";

function Card({ title }) {
	const [hasLiked, setHasLiked] = useState(false);

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
