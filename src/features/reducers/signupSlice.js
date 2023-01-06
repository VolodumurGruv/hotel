import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
	name: "signup",
	intialState: {
		userName: null,
		email: null,
		password: null,
		isSignedup: false,
		isModalOpen: false,
	},
	reducers: {
		signup: (state, action) => {
			state.userName = action.payload;
			state.email = action.payload;
			state.password = action.payload;
		},
		setIsModalOpen: (state, action) => {
			state.isModalOpen = action.payload;
		},
	},
});

export const { signup, setIsModalOpen } = signupSlice.actions;

export default signupSlice.reducer;
