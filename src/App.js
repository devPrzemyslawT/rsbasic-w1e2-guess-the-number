import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Guess the number !</p>
			</header>
			<div className='App-body'>
				<p>Enter number from 1 to 10: </p>
				<input type='number'></input>
				<button>DRAW</button>
				<p>Result:</p>
			</div>
		</div>
	);
}

export default App;
