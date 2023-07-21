interface ButtonCounterProps {
	colore?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
		| 'link';
	children: string;
	margine?: 'mt-5' | 'mb-3';
	grandezza?: 'btn-lg' | 'btn-sm';
	onButtonClick: () => void;
}

const ButtonCounter = ({
	colore = 'primary',
	children,
	grandezza,
	margine,
	onButtonClick,
}: ButtonCounterProps) => {
	return (
		<div>
			<button
				type="button"
				className={`btn ${grandezza} btn-${colore} ${margine}`}
				onClick={onButtonClick}>
				{children}
			</button>
		</div>
	);
};

export default ButtonCounter;
