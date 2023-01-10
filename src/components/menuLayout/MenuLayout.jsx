import "../../styles/button.css";
import { Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSignin } from "../../features/slices/singinSlice";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";

const MenuLayout = () => {
	const dispatch = useDispatch();
	const { userName, image } = useSelector((state) => state.signin);

	const logout = () => {
		dispatch(setSignin({ isSignedin: false }));
	};
	return (
		<Row>
			<Col span={4} offset={20}>
				<Space size="large">
					<Avatar src={image} size={64} icon={<UserOutlined />} />
					<Button className="logout-btn" ghost={true} onClick={logout}>
						Logout
					</Button>
				</Space>
			</Col>
		</Row>
	);
};

export default MenuLayout;
