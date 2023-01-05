import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";

import Login from "./components/login/Login";
import "./styles/login.css";

const { Content, Footer } = Layout;

function App() {
	return (
		<div>
			<Layout>
				<Header>
					<Login className="login" />
				</Header>
				<Content></Content>
				<Footer>Created by me</Footer>
			</Layout>
		</div>
	);
}

export default App;
