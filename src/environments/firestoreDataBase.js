import app from "./intialFirebase";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	doc,
	onSnapshot,
} from "firebase/firestore";
import { getFetchData } from "../mockData/getFetchData";

// connecting to firestorage
const db = getFirestore(app);

const dataDbMsg = {};

export const addDataToDb = async (dataName, data) => {
	console.log(db);
	try {
		const docRef = await addDoc(collection(db, dataName), data);
		console.log(
			`Data was added successfully. ID: ${docRef.id}, name: ${dataName}`
		);
		dataDbMsg.success = `Data was added successfully. ID: ${docRef.id}, name: ${dataName}`;

		return dataDbMsg;
	} catch (error) {
		console.error(`An error occurs in adding data to DB: ${error}`);
		dataDbMsg.error = `An error occurs in adding data to DB: ${error}`;

		return dataDbMsg;
	}
};

export const getDataFromDb = async (dataName, fn) => {
	try {
		const result = [];
		const querySnapshot = await getDocs(collection(db, dataName));

		querySnapshot.forEach((doc) => {
			const data = doc.data().rooms;
			for (const room of doc.data().rooms) {
				for (const key in room) {
					result.push((dataName[key] = doc.data().rooms[room][key]));
				}
			}
			console.log(result);
			fn(result);
			// fn(doc.data());
		});

		return dataDbMsg;
	} catch (error) {
		console.error(`An error occurs in getting data from DB: ${error}`);
		dataDbMsg.error = `An error occurs in getting data from DB: ${error}`;

		return dataDbMsg;
	}
};
