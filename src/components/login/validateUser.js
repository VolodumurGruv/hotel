/*
get user from DB
get user from form
compare name and password
*/

import { getUsers } from "../../environments/realTimeFirebase";

export const usersData = {};

export const isUserExist = (formData) => {
	getUsers((d) => Object.assign(usersData, d));

	for (const user in usersData) {
		if (
			user === formData.userName &&
			usersData[user]["password"] === formData.password
		)
			return { ...usersData[user], user };
	}
	return false;
};
