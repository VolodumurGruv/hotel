import { configureStore } from "@reduxjs/toolkit";
//reducers imports

import signinReducer from "./slices/singinSlice";
import messageReducer from "./slices/messageSlice";

export default configureStore({
	reducer: {
		signin: signinReducer,
		message: messageReducer,
	},
});
