import { Button, Form, Input } from "antd";
import { fn } from "moment";
import { useDispatch } from "react-redux";
import { sagaActions } from "../../features/sagas/sagaActions";
function Signup() {
	const dispatch = useDispatch();

	const onFinish = (values) => {
		console.log("Success:", values);
		dispatch({ type: `${sagaActions.SINGUP}`, payload: values });
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: false }}
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
				label="Email"
				name="email"
				rules={[
					{ required: true, message: "Please input your email!" },
					() => ({
						validator(_, value) {
							if (value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error("The two passwords that you entered do not match!")
							);
						},
					}),
				]}
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
			<Form.Item
				label="Confirm Password"
				name="passwordConfirm"
				dependencies={["password"]}
				hasFeedback
				rules={[
					{
						required: true,
						message: "Please confirm your password!",
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error("The two passwords that you entered do not match!")
							);
						},
					}),
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}

export default Signup;
