import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: null,
	isSignedin: false,
	signinBtn: false,
};

const signinSlice = createSlice({
	name: "signin",
	initialState,
	reducers: {
		setSignin: (state, action) => {
			console.log(action.payload);
			state.isSignedin = action.payload.isSignedin;
			state.email = action.payload.email;
		},
		setSigninBtn: (state, action) => {
			state.signinBtn = action.payload;
		},
		setIsSignedIn: (state, action) => {
			state.isSignedin = action.payload;
		},
	},
});

export const { setSignin, setIsSignedIn, setSigninBtn } = signinSlice.actions;

export default signinSlice.reducer;
