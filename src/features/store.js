import createSagaMiddleware from "@redux-saga/core";
import { configureStore, getDafaultMiddleware } from "@reduxjs/toolkit";
import { loginSaga } from "./sagas/loginSaga";
import userReducer from "./reducers/userSlice";
import signupReducer from "./reducers/signupSlice";

// look at example of using redux-toolkit + saga https://codesandbox.io/s/mfetp?file=/src/ListTodo.js

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
	reducer: {
		user: userReducer,
		// signup: signupReducer,
	},
	middleware: (getDafaultMiddleware) =>
		getDafaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
});

sagaMiddleware.run(loginSaga);
