import createSagaMiddleware from "@redux-saga/core";
import { configureStore, getDafaultMiddleware } from "@reduxjs/toolkit";
import loginSaga from "./sagas/loginSaga";
import userReducer from "./reducers/userSlice";
import signupReducer from "./reducers/signupSlice";
import signupSaga from "./sagas/signupSaga";
import modalReducer from "./reducers/modalSlice";
import signinReducer from "./reducers/singinSlice";
import signinSaga from "./sagas/signinSaga";


const sagaMiddleware = createSagaMiddleware();

export default configureStore({
	reducer: {
		user: userReducer,
		signup: signupReducer,
		modal: modalReducer,
		signin: signinReducer,
	},

	middleware: (getDafaultMiddleware) =>
		getDafaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(signupSaga);
sagaMiddleware.run(signinSaga);
