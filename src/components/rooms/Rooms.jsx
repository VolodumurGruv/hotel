import { useEffect, useState } from "react";
import { Table } from "antd";
import { columns } from "./tableData";

import { getDataFromDb } from "../../environments/firestoreDataBase";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Rooms() {
	const [rooms, setRooms] = useState([]);

	const roomDetail = (e) => {
		console.log(e.target);
		// const navigate = useNavigate();
		// return navigate(`/room/:${id}`);
	};

	const button = (
		<Button type="primary" onClick={roomDetail}>
			More information
		</Button>
	);

	const parseToDataTable = (d) => {
		const res = [];
		for (const elem of d) {
			for (const key in elem) {
				if (key === "id") {
					elem["key"] = elem[key];
				}
			}
			elem["button"] = button;
			res.push(elem);
		}

		return res;
	};

	useEffect(() => {
		getDataFromDb((a) => {
			const dataRooms = [...a.Rooms];

			setRooms(parseToDataTable(dataRooms));
		});
	}, []);

	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return <Table columns={columns} dataSource={rooms} onChange={onChange} />;
}

export default Rooms;
