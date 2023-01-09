import { Button, Form, Input, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSignin } from "../../features/slices/singinSlice";

function Signin() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onFinish = (values) => {
		dispatch(setSignin({ userName: values.username, isSignedin: true }));
		return navigate("/");
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);

		/***************** */
		// make a handlerError sagas .... etc.
		/***************** */
	};

	return (
		<div className="login-form">
			<div className="login-form--wrap">
				<h3>Authentication</h3>

				<Form
					name="login"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: "Please input your username!" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
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
	);
}

export default Signin;
