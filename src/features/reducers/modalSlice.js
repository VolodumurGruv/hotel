import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isModalOpen: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setIsModalOpen: (state, action) => {
			console.log(action.payload);
			state.isModalOpen = action.payload;
		},
	},
});

export const { setIsModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
