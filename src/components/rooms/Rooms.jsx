//uncoment these imports for adding data
// import getHotelMockData from "../../mockData/getHotelMockData";
// import {
// 	addDataToDb,
// 	getDataFromDb,
// } from "../../environments/firestoreDataBase";
// import { addDataRealTimeDB } from "../../environments/realTimeFirebase";

import { useEffect } from "react";
import { Table, Button } from "antd";

import { getRooms } from "../../environments/realTimeFirebase";
function Rooms() {
	// for adding data to real time firebase uncomment this
	// --- ** data will be rewrited ** ----
	// const users = getHotelMockData.getUsers();
	// const rooms2 = getHotelMockData.getAllRooms();
	// useEffect(() => {
	// 	addDataToDb("users", { users });
	// 	addDataToDb("rooms", { rooms2 });
	// 	getDataFromDb("users");
	// }, []);

	const rooms = [];

	const columns = [
		{
			title: "Number",
			dataIndex: "number",
			sortDirections: ["descend"],
		},
		{
			title: "Type",
			dataIndex: "type",
			defaultSortOrder: "descend",
			filters: [
				{
					text: "Standard",
					value: "Standard",
				},
				{
					text: "Suite",
					value: "Suite",
				},
			],
			onFilter: (value, record) => record.address.indexOf(value) === 0,
		},
		{
			title: "Occupancy",
			dataIndex: "occupancy",
			filters: [
				{
					text: "Standard",
					value: "Standard",
				},
				{
					text: "Suite",
					value: "Suite",
				},
			],
			onFilter: (value, record) => record.address.indexOf(value) === 0,
		},
		{
			title: "Price",
			dataIndex: "price",
			sorter: (a, b) => a.price - b.price,
		},

		{
			title: "Guest",
			dataIndex: "guest",
			filters: [
				{
					text: "Suite",
					value: "Suite",
				},
			],
			onFilter: (value, record) => record.address.indexOf(value) === 0,
		},
		{
			title: "",
			dataIndex: "button",
		},
	];
	const data = [
		{
			key: "1",
			number: 1,
			type: "John Brown",
			occupancy: 32,
			price: "New York No. 1 Lake Park",
			guest: "",
			button: <Button type="primary">More information</Button>,
		},
		{
			key: "2",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
		},
		{
			key: "3",
			name: "Joe Black",
			age: 32,
			address: "Sidney No. 1 Lake Park",
		},
		{
			key: "4",
			name: "Jim Red",
			age: 32,
			address: "London No. 2 Lake Park",
		},
	];

	useEffect(() => {
		getRooms((r) => Object.assign(rooms, r));

		console.log(rooms.length);
	}, [rooms]);

	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return <Table columns={columns} dataSource={rooms} onChange={onChange} />;
}

export default Rooms;
