import { useEffect } from "react";
import { Table } from "antd";
import { columns, data } from "./tableData";

import { getDataFromDb } from "../../environments/firestoreDataBase";
function Rooms() {
	let rooms = {};

	const setRooms = () => {
		getDataFromDb((a) => Object.assign(rooms, a));
		console.log(rooms.Accounts); /*undefined*/
		return rooms;
	};

	useEffect(() => {
		// getDataFromDb((a) => Object.assign(rooms, { ...a.Rooms }));
		console.log(setRooms());
	}, []);

	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return <Table columns={columns} dataSource={[rooms]} onChange={onChange} />;
}

export default Rooms;
