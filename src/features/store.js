import createSagaMiddleware from "@redux-saga/core";
import { configureStore, getDafaultMiddleware } from "@reduxjs/toolkit";
import loginSaga from "./sagas/loginSaga";
import userReducer from "./reducers/userSlice";
import signupReducer from "./reducers/signupSlice";
import signupSaga from "./sagas/signupSaga";
import modalReducer from "./reducers/modalSlice";
import signinReducer from "./reducers/singinSlice";

// look at example of using redux-toolkit + saga https://codesandbox.io/s/mfetp?file=/src/ListTodo.js

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
