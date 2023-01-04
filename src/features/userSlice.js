import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";
import { auth } from "../environments/intialFirebase";

const initialState = {
	value: null,
};

export const userAuth = createAsyncThunk("user/userAuth", async () => {
	try {
		const googleAuthProvider = new GoogleAuthProvider();

		const cred = await signInWithPopup(auth, googleAuthProvider);
		const user = await cred.user.displayName;
		console.log(user);
		return user;
	} catch (error) {}
});

export const userLogout = createAsyncThunk("user/userLogout", async () => {
	await signOut(auth);

	return null;
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	extraReducers: (diaplay) => {
		diaplay
			.addCase(userAuth.fulfilled, (state, action) => {
				state.value = action.payload;
			})
			.addCase(userLogout.fulfilled, (state, action) => {
				state.value = action.payload;
			});
	},
});

export default userSlice.reducer;
