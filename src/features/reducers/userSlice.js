import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { auth } from "../../environments/intialFirebase";

const initialState = {
	userName: null,
	imgUrl: null,
};

export const userAuth = createAsyncThunk("user/userAuth", async () => {
	try {
		const googleAuthProvider = new GoogleAuthProvider();
		const cred = await signInWithPopup(auth, googleAuthProvider);
		const { displayName, photoURL } = cred.user;

		return { displayName, photoURL };
	} catch (error) {
		console.error(error);
	}
});

export const userLogout = createAsyncThunk("user/userLogout", async () => {
	await signOut(auth);

	return null;
});

export const userSlice = createSlice({
	name: "user",
	initialState,

	reducers: {
		setUser: (state, action) => {
			state.userName = action.payload?.displayName;
			state.imgUrl = action.payload?.photoURL;
		},
	},

	extraReducers: (display) => {
		display
			.addCase(userAuth.fulfilled, (state, action) => {
				state.userName = action.payload?.displayName;
				state.imgUrl = action.payload?.photoURL;
			})
			.addCase(userLogout.fulfilled, (state) => {
				state.userName = null;
				state.imgUrl = null;
			});
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
