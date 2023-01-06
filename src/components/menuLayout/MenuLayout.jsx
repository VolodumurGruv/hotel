import { Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Login from "../login/Login";
import Modalform from "../login/ModalForm";
import { setIsModalOpen } from "../../features/reducers/signupSlice";

function MenuLayout() {
	const { userName } = useSelector((state) => state.user);

	const dispatch = useDispatch();

	return (
		<>
			<Space>
				<Login className="login" />
				{userName == null && (
					<>
						<button className="btn">Signin</button>
						<button className="btn" onClick={() => dispatch(setIsModalOpen(true))}>
							Signup
						</button>
					</>
				)}
			</Space>

			<Modalform></Modalform>
		</>
	);
}

export default MenuLayout;
