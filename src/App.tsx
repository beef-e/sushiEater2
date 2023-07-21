import { useState } from 'react';
import ButtonCounter from './components/ButtonCounter';
import Counter from './components/Counter';
import Header from './components/Header';
import React from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header></Header>

			<div className="mx-auto container text-center mt-5">
				<Counter quantita={count}>Nigiri</Counter>

				<div className="container d-flex justify-content-evenly mt-3">
					<ButtonCounter
						grandezza="btn-lg"
						onButtonClick={() => setCount(count + 1)}>
						+ 1
					</ButtonCounter>

					<ButtonCounter
						grandezza="btn-lg"
						colore="danger"
						onButtonClick={() => {
							if (count > 0) {
								setCount(count - 1);
							}
						}}>
						- 1
					</ButtonCounter>
				</div>
			</div>
		</>
	);
}

export default App;
