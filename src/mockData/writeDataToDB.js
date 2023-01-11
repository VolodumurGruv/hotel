/*for edding data run this file in console like belove
node path to file/firebaseConfig()
*/

const firebaseConfig = require("../environments/firebaseConfig");
const { initializeApp } = require("firebase/app");
const {
	collection,
	addDoc,
	getFirestore,
	getDocs,
} = require("firebase/firestore");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getFetchData = async () => {
	const fetchResult = {
		error: null,
	};
	const url =
		"https://remotemode.com/files/intership/front-end/firebase-data.json";
	try {
		const res = await fetch(url);
		const data = await res.json();
		data.Rooms.forEach((room) => {
			for (const key in room) {
				if (key === "description") {
					room[key] = room[key].split("\n").join(" ");
				}
			}
		});

		const docRef = await addDoc(collection(db, "hotel"), { ...data });
		console.log("Document written with ID: ", docRef.id);

		return data;
	} catch (error) {
		console.error(`An error occurs in getFetchData: ${error}`);

		fetchResult.error = error;

		return fetchResult;
	}
};

getFetchData();

// take data from DB
// const getDataDB = async () => {
// 	const querySnapshot = await getDocs(collection(db, "hotel"));
// 	querySnapshot.forEach((doc) => console.log(doc.data()));
// };

// getDataDB();
