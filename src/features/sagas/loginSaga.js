import { takeEvery } from "@redux-saga/core/effects";
import { sagaActions } from "./sagaActions";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { auth } from "../../environments/intialFirebase";
import { call } from "redux-saga/effects";

const { LOGIN, LOGOUT } = sagaActions;

const userAuth = async () => {
	try {
		const googleAuthProvider = new GoogleAuthProvider();
		const cred = await signInWithPopup(auth, googleAuthProvider);
		const { displayName, photoURL } = cred.user;

		return { displayName, photoURL };
	} catch (error) {
		console.error(error);
	}
};

export function* userLogout() {
	yield call(signOut, auth);

	return null;
}

export function* loginWorkerSaga() {
	try {
		const user = yield call(userAuth);

		return user;
	} catch (error) {
		console.error(error);
	}
}

export function* loginSaga() {
	yield takeEvery(LOGIN, loginWorkerSaga);
	yield takeEvery(LOGOUT, userLogout);
}
