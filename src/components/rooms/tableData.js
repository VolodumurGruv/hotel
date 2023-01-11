import { Button } from "antd";

export const columns = [
	{
		title: "Number",
		dataIndex: "number",
		sortDirections: ["descend"],
	},
	{
		title: "Type",
		dataIndex: "type",
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
		// onFilter: (value, record) => record.address.indexOf(value) === 0,
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
		// onFilter: (value, record) => record.address.indexOf(value) === 0,
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
				text: "Golden Branch",
				value: "Golden Branch",
			},
			{
				text: "Ratliff Schwartz",
				value: "Ratliff Schwartz",
			},
		],
		onFilter: (value, record) => record.address.indexOf(value) === 0,
	},
	{
		title: "",
		dataIndex: "button",
	},
];
export const data = [
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
