import "../../styles/login.css";
import "../../styles/button.css";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, removeUser } from "../../features/reducers/userSlice";
import { auth } from "../../environments/intialFirebase";
import SvgSelector from "../svgSelectors/SvgSelector";
import { sagaActions } from "../../features/sagas/sagaActions";

const Login = () => {
	const { userName, photoURL } = useSelector((state) => state.user);
	const { isSignedin } = useSelector((state) => state.signin);
	const dispatch = useDispatch();

	useEffect(() => {
		// check user

		const unsub = onAuthStateChanged(auth, (u) => {
			if (u) {
				const { displayName, photoURL } = u;
				return dispatch(setUser({ displayName, photoURL }));
			}

			return dispatch(removeUser());
		});

		return unsub;
	}, [dispatch]);

	const loginWithGoogle = () => {
		dispatch({ type: sagaActions.LOGIN });
	};

	const logoutGoogle = () => {
		dispatch({ type: sagaActions.LOGOUT });
	};

	return (
		<>
			{userName !== null || isSignedin ? (
				<div className="logo">
					<img className="logo-img" src={photoURL} alt="account image" />

					<span className="logo-text">{userName}</span>

					<button className="logo-logout--button btn" onClick={logoutGoogle}>
						Logout
					</button>
				</div>
			) : (
				<div className="logo-login--btn">
					<button className="btn" onClick={loginWithGoogle}>
						<SvgSelector id={"google"} />
						<span className="logo-login-text">Login with google</span>
					</button>
				</div>
			)}
		</>
	);
};

export default Login;
