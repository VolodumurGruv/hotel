import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";

import MenuLayout from "./components/menuLayout/MenuLayout";
import Message from "./components/message/Message";
import "./styles/login.css";

const { Content, Footer } = Layout;

function App() {
	return (
		<div>
			<Message />
			<Layout>
				<Header>
					<MenuLayout />
				</Header>
				<Content></Content>
				<Footer>&copy; 2023 Created by Grushka Volodumur</Footer>
			</Layout>
		</div>
	);
}

export default App;
