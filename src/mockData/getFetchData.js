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
		return data;
	} catch (error) {
		console.error(`An error occurs in getFetchData: ${error}`);

		fetchResult.error = error;

		return fetchResult;
	}
};
