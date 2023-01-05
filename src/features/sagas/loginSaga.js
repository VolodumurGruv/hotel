import { takeEvery } from "@redux-saga/core/effects";
import { sagaActions } from "./sagaActions";

const { LOGIN } = sagaActions;

export function* loginWorkerSaga() {
	console.log("login saga");
}

export function* loginSaga() {
	yield takeEvery(LOGIN, loginWorkerSaga);
}
