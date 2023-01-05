import createSagaMiddleware from "@redux-saga/core";
import { configureStore, getDafaultMiddleware } from "@reduxjs/toolkit";
import { loginSaga } from "./sagas/loginSaga";
import userReducer from "./reducers/userSlice";

// look at example of using redux-toolkit + saga https://codesandbox.io/s/mfetp?file=/src/ListTodo.js

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
	reducer: {
		user: userReducer,
	},
});
