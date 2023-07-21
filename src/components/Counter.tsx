interface CounterProps {
	children: string;
	quantita?: number;
}

const Counter = ({ children, quantita = 0 }: CounterProps) => {
	return (
		<div className="mb-3">
			<h1 style={{ fontSize: 50 }}>{children}</h1>

			<div className="fs-1">{quantita}</div>
		</div>
	);
};

export default Counter;
