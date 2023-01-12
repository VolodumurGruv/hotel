import { Button } from "antd";
import { getDataFromDb } from "../../environments/firestoreDataBase";

const field = ["key", "number", "type", "occupancy", "price", "guest"];
const button = { button: <Button type="primary">More information</Button> };

const rooms = {};
const parseToDataTable = () => getDataFromDb((d) => Object.assign(rooms, d));

for (const key in rooms) {
	console.log(key);
}
console.log(rooms.Rooms);
export default parseToDataTable;
