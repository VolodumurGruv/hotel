import { call, takeEvery } from "@redux-saga/core/effects";
import { sagaActions } from "./sagaActions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../environments/intialFirebase";

const { ISSIGNUP } = sagaActions;

const makeSignup = (auth, email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
};

export function* signupWorkerSaga() {
	console.log("signup saga");
}

export default function* signupSaga() {
	yield takeEvery(ISSIGNUP, signupWorkerSaga);
}
