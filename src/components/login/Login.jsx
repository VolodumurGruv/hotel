import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuth, userLogout, setUser } from "../../features/userSlice";
import { auth } from "../../environments/intialFirebase";
import "../../styles/login.css";

const Login = () => {
	const { userName, imgUrl } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		// check user
		const unsub = onAuthStateChanged(auth, (u) => {
			if (u) {
				const { displayName, photoURL } = u;
				return dispatch(setUser({ displayName, photoURL }));
			}
			console.log(userName !== null);
			return dispatch(setUser({ displayName: null, photoURL: null }));
		});

		console.log(userName);
		return unsub;
	}, [dispatch]);

	const loginWithGoogle = () => {
		dispatch(userAuth());
	};

	const logoutGoogle = () => {
		dispatch(userLogout());
	};

	return (
		<>
			{userName !== null ? (
				<div>
					<div className="logo">
						<div>
							<img className="logo-img" src={imgUrl} />
						</div>
						{userName}
					</div>

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
