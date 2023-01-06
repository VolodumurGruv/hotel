import { Button, Modal } from "antd";
import Signup from "./Signup";
import Signin from "./Signin";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalOpen } from "../../features/reducers/signupSlice";

function Modalform() {
	const { isModalOpen } = useSelector((state) => state.signup);
	const dispatch = useDispatch();

	const showModal = () => {
		dispatch(setIsModalOpen(true));
	};
	const handleOk = () => {
		dispatch(setIsModalOpen(false));
	};
	const handleCancel = () => {
		dispatch(setIsModalOpen(false));
	};
	return (
		<>
			<Button type="primary" onClick={showModal} style={{ display: "none" }}>
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
