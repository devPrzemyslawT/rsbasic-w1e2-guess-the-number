import logo from "./logo.svg";
import "./App.css";

import "./components/inputNumber/InNumber";
import InNumber from "./components/inputNumber/InNumber";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Guess the number !</p>
			</header>
			<div className='App-body'>
				<p>Enter number from 1 to 10: </p>
				<InNumber placeholder='Enter number...'></InNumber>
				<button>DRAW</button>
				<p>Result:</p>
			</div>
		</div>
	);
}

export default App;
