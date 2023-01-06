import { Space } from "antd";
import { useSelector } from "react-redux";
import Login from "../login/Login";
import Modalform from "../login/ModalForm";

function MenuLayout() {
	const { userName } = useSelector((state) => state.user);

	return (
		<>
			<Space>
				<Login className="login" />
				{userName == null && (
					<>
						<button className="btn">Signin</button>
						<button className="btn">Signup</button>
					</>
				)}
			</Space>

			<Modalform></Modalform>
		</>
	);
}

export default MenuLayout;
