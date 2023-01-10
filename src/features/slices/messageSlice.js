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
			console.log(action);
			state.isMessage = action.payload.isMessage;
			state.msg = action.payload.msg;
			state.isError = action.payload.isError;
			state.isSuccess = false;
		},
		setSuccess: (state, action) => {
			state.msg = action.payload;
			state.isSuccess = action.payload;
			state.isError = false;
		},
		setToDefault: (state) => {
			state.msg = null;
			state.isMessage = false;
			state.isError = false;
			state.isSuccess = false;
		},
	},
});

export const { setMessage, setError, setSuccess, setToDefault } = messageSlice.actions;

export default messageSlice.reducer;
