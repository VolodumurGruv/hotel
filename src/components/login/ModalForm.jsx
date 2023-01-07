import { Button, Modal } from "antd";
import Signup from "./Signup";
import Signin from "./Signin";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalOpen } from "../../features/reducers/modalSlice";
import { setIsSignedUp } from "../../features/reducers/signupSlice";
import { setIsSignedIn } from "../../features/reducers/singinSlice";

function Modalform() {
	const { isModalOpen } = useSelector((state) => state.modal);
	const { isSignedup } = useSelector((state) => state.signup);
	const { isSignedin } = useSelector((state) => state.signin);
	const dispatch = useDispatch();

	const showModal = () => {
		console.log(isModalOpen);
		dispatch(setIsModalOpen(true));
	};
	const handleOk = () => {
		dispatch(setIsModalOpen(false));
		dispatch(setIsSignedUp(false));
		dispatch(setIsSignedIn(false));
	};
	const handleCancel = () => {
		dispatch(setIsModalOpen(false));
		dispatch(setIsSignedUp(false));
		dispatch(setIsSignedIn(false));
	};

	return (
		<>
			<Button type="primary" onClick={showModal} style={{ display: "none" }}>
				Open Modal
			</Button>
			<Modal
				title={isSignedup ? "Signup" : "Sign In"}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				{isSignedup && <Signup />}
				{isSignedin && <Signin />}
			</Modal>
		</>
	);
}

export default Modalform;
