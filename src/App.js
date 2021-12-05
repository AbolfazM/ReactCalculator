import { useState } from 'react';
import './index.css';

const App = () => {

	const createNumbers = () => {
		const numbers = [];
		for (let i = 1; i < 10; i++) {
			numbers.push(
				<button key={i}> {i} </button>
			);
		}
		return numbers;
	}

	return(
		<div className="App">
			<div className="calculator">

				<div className="display"></div>

				<div className="operators">
					<button>/</button>
					<button>*</button>
					<button>+</button>
					<button>-</button>

					<button>DEL</button>
				</div>

				<div className="digits">
					{ createNumbers() }
					<button>0</button>
					<button>.</button>
					<button>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;