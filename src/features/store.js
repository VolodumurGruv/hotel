import { configureStore } from "@reduxjs/toolkit";
//reducers imports

import signinReducer from "./slices/singinSlice";
import messageReducer from "./slices/messageSlice";
import roomsReducer from "./slices/roomsSlice";

export default configureStore({
	reducer: {
		signin: signinReducer,
		message: messageReducer,
		rooms: roomsReducer,
	},
});
