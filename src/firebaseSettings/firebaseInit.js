const { initializeApp } = require("firebase/app");
const { addDoc, collection, getFirestore } = require("firebase/firestore");
// dotenv was installed as dev dependence
require("dotenv").config();

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// make a new collection
const makeNewCollection = async () => {
	try {
		const url =
			"https://remotemode.com/files/intership/front-end/firebase-data.json";
		const dataFetch = await fetch(url);
		const data = await dataFetch.json();
		const docRef = await addDoc(collection(db, "hotel"), data);
	} catch (error) {
		console.error(error);
	}
};

// makeNewCollection();

module.exports = db;
