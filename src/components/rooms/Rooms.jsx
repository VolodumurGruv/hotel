import { useEffect } from "react";
import { Table } from "antd";
import { columns, data } from "./tableData";

import { getDataFromDb } from "../../environments/firestoreDataBase";
import parseToDataTable from "./parseDataToTable";
function Rooms() {
	let rooms = {};

	useEffect(() => {
		// getDataFromDb((a) => Object.assign(rooms, { ...a.Rooms }));
		getDataFromDb().then((b) => (rooms.data = b.data.Rooms));
	}, []);
	console.log(rooms.data);
	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return <Table columns={columns} dataSource={[rooms]} onChange={onChange} />;
}

export default Rooms;
