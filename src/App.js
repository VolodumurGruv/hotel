import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";


import MenuLayout from "./components/menuLayout/MenuLayout";
import "./styles/login.css";

const { Content, Footer } = Layout;

function App() {
	return (
		<div>
			<Layout>
				<Header>
					
					<MenuLayout/>
				</Header>
				<Content></Content>
				<Footer>Created by me</Footer>
			</Layout>
		</div>
	);
}

export default App;
