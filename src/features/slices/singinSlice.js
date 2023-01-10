import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userName: null,
	image: null,
	isSignedin: false,
};

const signinSlice = createSlice({
	name: "signin",
	initialState,
	reducers: {
		setSignin: (state, action) => {
			state.isSignedin = action.payload.isSignedin;
			state.userName = action.payload.userName;
			state.image = action.payload.image;
		},
	},
});

export const { setSignin, setIsSignedIn } = signinSlice.actions;

export default signinSlice.reducer;
