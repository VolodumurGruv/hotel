export const getFetchData = async () => {
	const fetchResult = {
		error: null,
	};
	const url =
		"https://remotemode.com/files/intership/front-end/firebase-data.json";
	try {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(`An error occurs in getFetchData: ${error}`);

		fetchResult.error = error;

		return fetchResult;
	}
};
