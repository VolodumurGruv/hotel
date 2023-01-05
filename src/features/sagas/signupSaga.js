import { takeEvery } from "@redux-saga/core/effects";
import { sagaActions } from "./sagaActions";

const { LOGOUT } = sagaActions;

export function* signupWorkerSaga() {
	console.log("signup saga");
}

export default function* signupSaga() {
	yield takeEvery(LOGOUT, signupWorkerSaga);
}
