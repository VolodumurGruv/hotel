import app from "./intialFirebase";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
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
		const querySnapshot = await getDocs(collection(db, dataName));
		querySnapshot.forEach((doc) => {
			dataDbMsg[doc.id] = doc.data();
			console.log(doc.data());
			fn(doc.data());
		});

		return dataDbMsg;
	} catch (error) {
		console.error(`An error occurs in getting data from DB: ${error}`);
		dataDbMsg.error = `An error occurs in getting data from DB: ${error}`;

		return dataDbMsg;
	}
};
