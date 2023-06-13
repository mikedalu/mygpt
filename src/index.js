import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App items={["A", "B", "C"]} />
	</React.StrictMode>
);

let listItem = document.querySelectorAll("li")[2];
if (listItem) {
	listItem.click();
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
