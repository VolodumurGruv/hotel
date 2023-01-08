import { call, takeEvery } from "@redux-saga/core/effects";
import { sagaActions } from "./sagaActions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../environments/intialFirebase";

const onSignup = async (auth, email, password) => {
	console.log(auth);
	const res = await createUserWithEmailAndPassword(auth, email, password);
	// .then((userCredential) => {
	// 	// Signed in
	// 	const user = userCredential.user;
	// 	// ...
	// })
	// .catch((error) => {
	// 	const errorCode = error.code;
	// 	const errorMessage = error.message;
	// 	// ..
	// });
	console.log(res);
	return res;
};

export function* handleSignup(actions) {
	try {
		const d = yield call(onSignup, auth, actions.email, actions.password);
		console.log(d);
	} catch (error) {
		console.error(`Signup error: ${error}`);
	}
}

export default function* signupSaga() {
	yield takeEvery(`${sagaActions.SINGUP}`, handleSignup);
}
