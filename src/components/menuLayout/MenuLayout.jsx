import { Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Login from "../login/Login";
import Modalform from "../login/ModalForm";
import { setIsModalOpen } from "../../features/reducers/modalSlice";
import { setIsSignedUp } from "../../features/reducers/signupSlice";
import { setIsSignedIn } from "../../features/reducers/singinSlice";

const MenuLayout = () => {
	const { userName } = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const handleSignupClick = () => {
		dispatch(setIsModalOpen(true));
		dispatch(setIsSignedUp(true));
		dispatch(setIsSignedIn(false));
	};

	const handleSigninClick = () => {
		dispatch(setIsModalOpen(true));
		dispatch(setIsSignedIn(true));
		dispatch(setIsSignedUp(false));
	};

	return (
		<>
			<Space size="middle">
				<Login className="login" />
				{userName == null && (
					<>
						<button className="btn" onClick={handleSigninClick}>
							Signin
						</button>
						<button className="btn" onClick={handleSignupClick}>
							Signup
						</button>
					</>
				)}
			</Space>

			<Modalform></Modalform>
		</>
	);
};

export default MenuLayout;
