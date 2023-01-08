import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	msg: null,
	isMessage: false,
	isError: false,
	isSuccess: false,
};

const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		setMessage: (state, action) => {
			state.isMessage = action.payload;
		},
		setError: (state, action) => {
			console.log(`action: ${action}`);
			state.isMessage = action.payload;
			state.msg = action.payload;
			state.isError = action.payload;
			state.isSuccess = false;
		},
		setSuccess: (state, action) => {
			state.msg = action.payload;
			state.isSuccess = action.payload;
			state.isError = false;
		},
	},
});

export const { setMessage, setError, setSuccess } = messageSlice.actions;

export default messageSlice.reducer;
