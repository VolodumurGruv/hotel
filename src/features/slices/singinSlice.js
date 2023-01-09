import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userName: null,
	isSignedin: false,
};

const signinSlice = createSlice({
	name: "signin",
	initialState,
	reducers: {
		setSignin: (state, action) => {
			state.isSignedin = action.payload.isSignedin;
			state.userName = action.payload.userName;
		},
	},
});

export const { setSignin, setIsSignedIn } = signinSlice.actions;

export default signinSlice.reducer;
