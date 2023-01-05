import { Button, Modal } from "antd";
import Signup from "./Signup";
import Signin from "./Signin";
import { useEffect, useState } from "react";

function Modalform(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		setIsModalOpen(props.state);
		console.log(isModalOpen, props.state);
	}, []);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			<Button type="primary" onClick={showModal}>
				Open Modal
			</Button>
			<Modal
				title="Basic Modal"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Signup />
				<Signin />
			</Modal>
		</>
	);
}

export default Modalform;
