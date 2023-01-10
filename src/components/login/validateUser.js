/*
get user from DB
get user from form
compare name and password
*/

import { getUsers } from "../../environments/realTimeFirebase";

const usersData = {};

export const isUserExist = (formData) => {
	getUsers((d) => Object.assign(usersData, d));

	for (const user in usersData) {
		if (
			user === formData.username &&
			usersData[user]["password"] === formData.password
		)
			return true;
	}
	return false;
};
