import { Menu, Space } from "antd";
import { useState } from "react";
import Login from "../login/Login";
import Modalform from "../login/ModalForm";

function MenuLayout() {
	const [signUp, setSignUp] = useState(false);
	const signUpAction = () => {
		setSignUp(true);
		console.log(signUp)
	};

	return (
		<>
			<Menu theme="dark" mode="horizontal">
				<Space>
					<Login className="login" />
					<div>
						<button className="btn">Signin</button>
					</div>
					<div>
						<button className="btn" onClick={signUpAction}>
							Signup
						</button>
					</div>
				</Space>
			</Menu>
			<Modalform state={signUp}></Modalform>
		</>
	);
}

export default MenuLayout;
