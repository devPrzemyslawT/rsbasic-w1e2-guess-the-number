import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import "./components/inputNumber/InNumber";
import InNumber from "./components/inputNumber/InNumber";
import SimpleButton from "./components/simpleButton/SimpleButton";

function App() {
	const [inputValue, setInputValue] = useState("");

	const handleOnChange = event => {
		setInputValue(event.target.value);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Guess the number !</p>
			</header>
			<div className='App-body'>
				<p>Enter number from 1 to 10: </p>
				<InNumber
					placeholder='Enter number...'
					onChangeInput={handleOnChange}
				/>
				<SimpleButton labelButton='Draw' />
				<p>Result: {inputValue}</p>
			</div>
		</div>
	);
}

export default App;
