import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userName: null,
	photoURL: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,

	reducers: {
		setUser: (state, action) => {
			state.userName = action.payload?.displayName;
			state.photoURL = action.payload?.photoURL;
		},
		removeUser: (state) => {
			state.userName = null;
			state.photoURL = null;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
