import { mockHotelData } from "./mockData";

const getHotelMockData = {
	mockHotelData,
	getAllRooms() {
		return this.mockHotelData.Rooms;
	},
	getRoomById(idx) {
		const rooms = this.getAllRooms();
		return ([...rooms].id = idx);
	},

	getUsers() {
		return this.mockHotelData.Accounts;
	},
};

export default getHotelMockData;
