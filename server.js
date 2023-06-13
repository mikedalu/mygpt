const PORT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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";

app.post("/completions", async (req, res) => {
	const options = {
		method: "POST",
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ model: "gpt-3.5-turbo", message: [{ role: "user", content: "how are you?" }], max_tokens: 100 }),
	};
	try {
		const response = await fetch("https://api.openai.com/v1/chat/completions", options);
		const data = await response.json();
		res.send(data);
	} catch (err) {
		console.log(err);
	}
});

app.listen(PORT, () => "Server listening on port " + PORT);
