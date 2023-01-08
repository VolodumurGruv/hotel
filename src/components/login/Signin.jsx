import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { sagaActions } from "../../features/sagas/sagaActions";

function Signin() {
	const dispatch = useDispatch();

	const onFinish = (values) => {
		console.log("Success:", values);
		dispatch({
			type: `${sagaActions.SINGIN}`,
			payload: { ...values },
		});

		dispatch({
			type: `${sagaActions.ISLOGGEDIN}`,
			payload: { isSignedin: true },
		});
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);

		/***************** */
		// make a hadkerError sagas .... etc.
		dispatch({
			type: sagaActions.ONERROR,
			payload: { errorInfo, isError: true },
		});
		/***************** */
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Email"
				name="email"
				rules={[{ required: true, message: "Please input your email!" }]}
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

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}

export default Signin;
