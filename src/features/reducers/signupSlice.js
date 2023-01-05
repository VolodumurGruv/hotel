import { createSlice } from "@reduxjs/toolkit";

const intialState = {
	userName: null,
	email: null,
	password: null,
	isSignup: false,
};

export const signupSlice = createSlice({
	name: "signup",
	intialState,
	reducers: {
		signup: (state, action) => {
			state.userName = action.payload;
			state.email = action.payload;
			state.password = action.payload;
		},
	},
});

export const { signup } = signupSlice.actions;

export default signupSlice.reducer;
