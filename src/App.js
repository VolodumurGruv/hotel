import "./styles/login.css";
import "./styles/footer.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Rooms from "./components/rooms/Rooms";
import Room from "./components/rooms/Room";
import Singin from "./components/login/Signin";
import RootLayout from "./components/menuLayout/RootLayout";
import { useSelector } from "react-redux";

function App() {
	const isSignedin = useSelector((state) => state.signin.isSignedin);

	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route
					index
					element={isSignedin ? <Rooms /> : <Navigate to="/login" replace={true} />}
				/>
				<Route
					path="/rooms/:id"
					element={isSignedin ? <Room /> : <Navigate to="/login" replace={true} />}
				/>
				<Route path="*" element={<Navigate to="/" replace={true} />} />
			</Route>
			<Route path="/login" element={<Singin />} />
		</Routes>
	);
}

export default App;
