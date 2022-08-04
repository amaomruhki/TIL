import React from "react";
import logo from "./logo.svg";
import "./App.css";

//type of
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "Hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

//key of
type KEYS = {
	primary: string;
	secondary: string;
};
let key: keyof KEYS;
key = "primary";

//type of keyof
const SPORTS = {
	soccer: "Soccer",
	baseball: "",
};

//erum
enum OS {
	Win,
	Mac,
	Lin,
}
interface PC {
	id: number;
	OSType: OS;
}

const PC1: PC = {
	id: 1,
	OSType: OS.Win,
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
