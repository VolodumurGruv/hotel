import app from "./intialFirebase";
import { getDatabase, set, ref, onValue } from "firebase/database";

const database = getDatabase(app);

export const addDataRealTimeDB = (dataName, data) => {
	set(ref(database, dataName), data);
};

// const setUpData = (data) => {
// 	const respData = { data };
// 	console.log(respData);
// 	return respData;
// };

export const getRooms = (fn) => {
	if (typeof fn === "function") {
		const roomsRef = ref(database, "rooms/rooms");
		onValue(roomsRef, (snapshot) => {
			fn(snapshot.val());
		});
		return;
	}

	return null;
};

export const getUsers = (fn) => {
	if (typeof fn === "function") {
		const roomsRef = ref(database, "users/users");
		onValue(roomsRef, (snapshot) => {
			fn(snapshot.val());
		});
		return;
	}

	return null;
};
