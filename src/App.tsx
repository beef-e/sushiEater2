import { useState } from 'react';
import ButtonCounter from './components/ButtonCounter';
import Counter from './components/Counter';
import Header from './components/Header';
import ModalInput from './components/ModalInput';

function App() {
	const [count, setCount] = useState(0);
	const [start, setStart] = useState(false);
	const [inputText, setInputText] = useState('');

	return (
		<>
			<Header></Header>

			{!start && (
				<ModalInput
					InputText={inputText}
					handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						// 👇 Store the input value to local state
						setInputText(e.target.value);
					}}>
					<ButtonCounter
						colore="primary"
						onButtonClick={() => {
							inputText === '' ? setStart(false) : setStart(true);
						}}>
						Submit
					</ButtonCounter>
				</ModalInput>
			)}

			{start && (
				<div className="mx-auto container text-center mt-5">
					<Counter quantita={count}>{inputText}</Counter>

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
			)}
		</>
	);
}

export default App;
