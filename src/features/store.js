import createSagaMiddleware from "@redux-saga/core";
import {
	combineReducers,
	configureStore,
	getDafaultMiddleware,
} from "@reduxjs/toolkit";
import loginSaga from "./sagas/loginSaga";
import userReducer from "./reducers/userSlice";
import signupReducer from "./reducers/signupSlice";
import signupSaga from "./sagas/signupSaga";

// look at example of using redux-toolkit + saga https://codesandbox.io/s/mfetp?file=/src/ListTodo.js

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({ user: userReducer, signup: signupReducer });

export default configureStore({
	reducer,

	middleware: (getDafaultMiddleware) =>
		getDafaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(signupSaga);
