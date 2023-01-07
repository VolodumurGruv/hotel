import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userName: null,
	email: null,
	password: null,
	isSignedup: false,
};

const signupSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		setSignup: (state, action) => {
			state.userName = action.payload;
			state.email = action.payload;
			state.password = action.payload;
		},
		setIsSignedUp: (state, action) => {
			
			state.isSignedup = action.payload;
		},
	},
});

export const { setSignup, setIsSignedUp } = signupSlice.actions;

export default signupSlice.reducer;
