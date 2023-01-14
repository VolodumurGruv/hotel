const { collection, getDocs, doc, getDoc } = require("firebase/firestore");
const db = require("./firebaseInit");

const getData = async () => {
	const querySnapshot = await getDocs(collection(db, "hotel"));
	querySnapshot.forEach((doc) => {
		doc.data();
	});
};
const data = [];

const setleData = (d) => {
	data.push(d);
	console.log(data[0].Rooms[1].type);
};

const getRefDoc = async (fn) => {
	try {
		const docRef = doc(db, "hotel", "6MHPm1fjLn8VXdcalLuM");
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			fn(docSnap.data());
		} else {
			throw new Error("No such document");
		}
	} catch (error) {
		console.error(error);
	}
};

getRefDoc(setleData);

console.log(data);
