import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router";
import MenuLayout from "./MenuLayout";

function RootLayout() {
	return (
		<Layout className="layout">
			<Header>
				<MenuLayout />
			</Header>
			<Content>
				<Outlet />
			</Content>
			<Footer className="footer">&copy; Grushka Volodymyr 2023</Footer>
		</Layout>
	);
}

export default RootLayout;
