import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import React, { useState } from 'react';

interface ModalInputProps {
	children: React.ReactNode;
	InputText: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput = ({ children, InputText, handleChange }: ModalInputProps) => {
	const [showVariable, setShowVariable] = useState(true);

	const closeModal = () => {
		setShowVariable(false);
	};

	return (
		<Modal
			backdrop="static"
			show={showVariable}
			onHide={closeModal}>
			<ModalHeader>
				<ModalTitle>Nome del piatto</ModalTitle>
			</ModalHeader>
			<ModalBody>
				<div>
					<h5>Inserisci il nome del prossimo piatto</h5>

					<input
						type="text"
						className="form-control"
						placeholder="Nome del piatto"
						onChange={handleChange}
						value={InputText}
					/>
				</div>
			</ModalBody>
			<ModalFooter>{children}</ModalFooter>
		</Modal>
	);
};

export default ModalInput;
