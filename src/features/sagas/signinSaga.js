import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../environments/intialFirebase";
import { sagaActions } from "./sagaActions";
import { call, takeEvery } from "redux-saga/effects";

const onSignin = async (auth, email, password) => {
	const res = await signInWithEmailAndPassword(auth, email, password);
	// .then((userCredential) => {
	// 	// Signed in
	// 	const user = userCredential.user;
	// 	// ...
	// })
	// .catch((error) => {
	// 	const errorCode = error.code;
	// 	const errorMessage = error.message;
	// });
	return res;
};
export function* handleSignin(actions) {
	console.log(actions);
	try {
		const b = yield call(
			onSignin,
			auth,
			actions.payload.email,
			actions.payload.password
		);
		console.log(b);
		return sagaActions.SINGIN;
	} catch (error) {
		console.log("errore");
	}
}

export default function* singinSaga() {
	yield takeEvery(`${sagaActions.SINGIN}`, handleSignin);
}
