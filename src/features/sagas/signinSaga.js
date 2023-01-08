import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../environments/intialFirebase";
import { sagaActions } from "./sagaActions";
import { call, takeEvery } from "redux-saga/effects";
import { setSignin } from "../reducers/singinSlice";

const onSignin = async (auth, email, password) => {
	const res = await signInWithEmailAndPassword(auth, email, password);

	return res;
};

export function* handleSignin(actions) {
	try {
		const b = yield call(
			onSignin,
			auth,
			actions.payload.email,
			actions.payload.password
		);
		console.log(b);
		// setUser(actions.payload)
	} catch (error) {
		console.error(error);
		console.log("Invalid email or password!");
	}
}

export function* handleLoggedIn(actions) {
	yield call(setSignin({ isSiggnedIn: actions.payload.isSiggnedIn }));
}

export default function* singinSaga() {
	yield takeEvery(`${sagaActions.SINGIN}`, handleSignin);
	yield takeEvery(`${sagaActions.ISLOGGEDIN}`, handleLoggedIn);
}
