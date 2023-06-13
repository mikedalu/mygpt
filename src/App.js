import { useState } from "react";
import "./App.css";

// function App() {
// 	const getMessages = async () => {
// 		const options = {
// 			method: "POST",
// 			body: JSON.stringify({
// 				message: "Hello how are you",
// 			}),
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		};
// 		try {
// 			const response = await fetch("http://localhost:8000/completions", options);
// 			const data = await response.json();
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};
// 	return (
// 		<div className="app">
// 			<section className="side-bar">
// 				<button>+ New chat</button>
// 				<ul className="history"></ul>
// 				<nav>
// 					<p>Made by Mike</p>
// 				</nav>
// 			</section>
// 			<section className="main">
// 				<h1>MikeGTP</h1>
// 				<ul className="feed"></ul>
// 				<div className="bottom-section">
// 					<div className="input-container">
// 						<input onChange={getMessages} />
// 						<div id="submit">➢</div>
// 					</div>
// 					<p className="info">
// 						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis suscipit temporibus, at,
// 						laudantium unde tempora cum doloribus incidunt libero laboriosam quae sequi ullam obcaecati deserunt,
// 						in sit eaque corporis nulla?
// 					</p>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

// export default App;

const App = (props) => {
	// Yоur cоdе gоеs hеrе
	const [items, setItems] = useState(props.items);

	//get clicked item
	const getItem = (e) => {
		let index = items.indexOf(e.target.textContent);
		console.log(index);
		let ITEMS = [...items];
		ITEMS.splice(index, 1);
		ITEMS.push(e.target.textContent);
		setItems(ITEMS);
	};
	return (
		<ul>
			{items.map((item, i) => {
				return (
					<li onClick={getItem} key={i}>
						{item}
					</li>
				);
			})}{" "}
		</ul>
	);
};

export default App;
