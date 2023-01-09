import "../../styles/button.css";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setSignin } from "../../features/slices/singinSlice";

const MenuLayout = () => {
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(setSignin({ isSignedin: false }));
	};
	return (
		<div>
			<Button className="logout-btn" ghost={true} onClick={logout}>
				Logout
			</Button>
		</div>
	);
};

export default MenuLayout;
