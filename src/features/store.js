import { configureStore } from "@reduxjs/toolkit";
//reducers imports

import signinReducer from "./reducers/singinSlice";
import messageReducer from "./reducers/messageSlice";

export default configureStore({
	reducer: {
		signin: signinReducer,
		message: messageReducer,
	},
});
