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
				value: "standard",
			},
			{
				text: "Suite",
				value: "suite",
			},
		],
		onFilter: (value, record) => record.type.indexOf(value) === 0,
	},
	{
		title: "Occupancy",
		dataIndex: "occupancy",
		filters: [
			{
				text: "One",
				value: 1,
			},
			{
				text: "Two",
				value: 2,
			},
			{
				text: "Three",
				value: 3,
			},
			{
				text: "Four",
				value: 4,
			},
			{
				text: "Five",
				value: 5,
			},
		],
		onFilter: (value, record) => record.occupancy === value,
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
		onFilter: (value, record) => record.guest.indexOf(value) === 0,
	},
	{
		title: "",
		dataIndex: "button",
	},
];
