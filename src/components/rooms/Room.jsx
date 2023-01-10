import React from "react";
import { useEffect } from "react";
import { getRooms } from "../../environments/realTimeFirebase";

function Room() {
	const rooms = [];

	useEffect(() => {
		getRooms((r) => Object.assign(rooms, r));
	}, [rooms]);
	return <div>Room</div>;
}

export default Room;
