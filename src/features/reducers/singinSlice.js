import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: null,
	password: null,
	isSignedin: false,
};

const signinSlice = createSlice({
	name: "signin",
	initialState,
	reducers: {
		setSignin: (state, action) => {
			state.email = action.payload;
			state.password = action.payload;
		},
		setIsSignedIn: (state, action) => {
			state.isSignedin = action.payload;
		},
	},
});

export const { setSignin, setIsSignedIn } = signinSlice.actions;

export default signinSlice.reducer;
