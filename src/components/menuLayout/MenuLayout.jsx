import { Space, Button } from "antd";
import { useDispatch } from "react-redux";
import { setSigninBtn } from "../../features/reducers/singinSlice";

const MenuLayout = () => {
	const dispatch = useDispatch();

	const handleSigninClick = () => {
		dispatch(setSigninBtn(true));
	};

	return (
		<>
			<Space size="middle">
				<Button type="primary" onClick={handleSigninClick}>
					Signin
				</Button>
			</Space>
		</>
	);
};

export default MenuLayout;
