import { Layout } from "antd";

import Login from "./components/login/Login";

const { Content, Footer } = Layout;

function App() {
	return (
		<div className="App">
			<Layout>
				<Content>
					<Login />
				</Content>
				<Footer>Created by me</Footer>
			</Layout>
		</div>
	);
}

export default App;
