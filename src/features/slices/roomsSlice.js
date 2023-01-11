import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	checkInDate: null,
	description: null,
	features: null,
	gallery: null,
	guest: null,
	id: null,
	isCheckedIn: false,
	number: null,
	occupancy: null,
	price: null,
	type: null,
};

const roomsSlice = createSlice({
	name: "rooms",
	initialState,
	reducers: {
		setRooms: (state, action) => {
			state.checkInDate = action.payload.checkInDate;
			state.description = action.payload.description;
			state.features = action.payload.features;
			state.gallery = action.payload.gallery;
			state.id = action.payload.id;
			state.isCheckedIn = action.payload.isCheckedIn;
			state.number = action.payload.number;
			state.occupancy = action.payload.occupancy;
			state.price = action.payload.price;
			state.type = action.payload.type;
			console.log(action.payload);
		},
	},
});

export const { setRooms } = roomsSlice.actions;

export default roomsSlice.reducer;
