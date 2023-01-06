import { Button, Modal } from "antd";
import Signup from "./Signup";
import Signin from "./Signin";
import { useSelector } from "react-redux";

function Modalform() {
	// const { isModalOpen, setIsModalOpen } = useSelector((state) => state.signup);

	const showModal = () => {
		// setIsModalOpen(true);
	};
	const handleOk = () => {
		// setIsModalOpen(false);
	};
	const handleCancel = () => {
		// setIsModalOpen(false);
	};
	return (
		<>
			<Button type="primary" onClick={showModal} style={{ display: "none" }}>
				Open Modal
			</Button>
			<Modal
				title="Basic Modal"
				// open={isModalOpen}
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
