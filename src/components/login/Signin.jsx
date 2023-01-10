import { Button, Form, Input, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Message from "../message/Message";
import { setError } from "../../features/slices/messageSlice";
import { setSignin } from "../../features/slices/singinSlice";
import { isUserExist } from "./validateUser";

function Signin() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onFinish = (values) => {
		const user = isUserExist(values, "users");

		if (user?.user) {
			dispatch(
				setSignin({ userName: user.user, image: user.image, isSignedin: true })
			);

			return navigate("/");
		}
		// add message that user doesn't exist
		dispatch(
			setError({
				isMessage: true,
				msg: "Invalid username or wrong password!",
				isError: true,
			})
		);
	};

	const onFinishFailed = (errorInfo) => {
		const error = errorInfo.errorFields[0].errors[0];
		dispatch(
			setError({
				isMessage: true,
				msg: error,
				isError: true,
			})
		);
	};

	return (
		<>
			<Message />
			<div className="login-form">
				<div className="login-form--wrap">
					<h3>Authentication</h3>

					<Form
						name="login"
						labelCol={{ span: 5 }}
						wrapperCol={{ span: 18 }}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
						labelAlign="left"
					>
						<Form.Item
							label="Username"
							name="userName"
							rules={[
								{ required: true, message: "Please input your username!" },
								{ type: "string", min: 4 },
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{ required: true, message: "Please input your password!" },
								{ type: "string", min: 4 },
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
						<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</>
	);
}

export default Signin;
