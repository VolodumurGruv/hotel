/* uncoment these imports for adding data
import getHotelMockData from "../../mockData/getHotelMockData";
import { addDataToDb } from "../../environments/intialFirebase";
import { addDataRealTimeDB } from "../../environments/realTimeFirebase";
*/
import { useEffect } from "react";

import { getRooms, getUsers } from "../../environments/realTimeFirebase";
function Rooms() {
	/*for adding data to real time firebase uncomment this
	--- ** data will be rewrited ** ----
	const users = getHotelMockData.getUsers();
	const rooms = getHotelMockData.getAllRooms();
	useEffect(() => {
		addDataRealTimeDB("users", { users });
		addDataRealTimeDB("rooms", { rooms });
	}, [rooms, users]);
*/

	useEffect(() => {
		getRooms();

		getUsers();
	});
	return <div>Rooms</div>;
}

export default Rooms;
