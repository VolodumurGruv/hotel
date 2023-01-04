import { useDispatch, useSelector } from "react-redux";
import { userAuth, userLogout } from "../../features/userSlice";
const Login = () => {
	const user = useSelector((state) => state.user.value);
	const dispatch = useDispatch();

	const loginWithGoogle = () => {
		dispatch(userAuth());
	};

	const logoutGoogle = () => {
		dispatch(userLogout());
	};

	return (
		<>
			{user !== null ? (
				<div>
					{user}
					<button onClick={logoutGoogle}>Logout</button>
				</div>
			) : (
				<div>
					<button onClick={loginWithGoogle}>Login</button>
				</div>
			)}
		</>
	);
};

export default Login;
