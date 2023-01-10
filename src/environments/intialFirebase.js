import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getFetchData } from "../mockData/getFetchData";

const app = initializeApp(firebaseConfig);
const dataDbMsg = {};

export default app;
export const auth = getAuth(app);
// connecting to firestorage
export const db = getFirestore(app);

export const addDataToDb = async (dataName, data) => {
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

export const getDataFromDb = async (dataName) => {
	try {
		const querySnapshot = await getDocs(collection(db, dataName));
		querySnapshot.forEach((doc) => {
			dataDbMsg[doc.id] = doc.data();
			console.log(`${doc.id} => ${doc.data()}`);
		});

		return dataDbMsg;
	} catch (error) {
		console.error(`An error occurs in getting data from DB: ${error}`);
		dataDbMsg.error = `An error occurs in getting data from DB: ${error}`;

		return dataDbMsg;
	}
};
