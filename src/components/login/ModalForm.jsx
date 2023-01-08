import { Button, Modal } from "antd";
import Signup from "./Signup";
import Signin from "./Signin";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalOpen } from "../../features/reducers/modalSlice";
import { setIsSignedUp } from "../../features/reducers/signupSlice";
import { setSigninBtn } from "../../features/reducers/singinSlice";
import { useEffect } from "react";

function Modalform() {
	const { isModalOpen } = useSelector((state) => state.modal);
	const { isSignedup } = useSelector((state) => state.signup);
	const signinBtn = useSelector((state) => state.signin.signinBtn);

	const dispatch = useDispatch();

	const showModal = () => {};
	const handleOk = () => {
		dispatch(setIsModalOpen(false));
		dispatch(setIsSignedUp(false));
		dispatch(setSigninBtn(false));
	};
	const handleCancel = () => {
		dispatch(setIsModalOpen(false));
		dispatch(setIsSignedUp(false));
		dispatch(setSigninBtn(false));
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
				{signinBtn && <Signin />}
			</Modal>
		</>
	);
}

export default Modalform;
