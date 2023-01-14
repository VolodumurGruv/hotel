/*
get user from DB
get user from form
compare name and password
*/

import { getDataFromDb } from "../../environments/firestoreDataBase";

export const usersData = {};

export const isUserExist = (formData) => {
	getDataFromDb((d) => Object.assign(usersData, d.Accounts));

	for (const user in usersData) {
		if (
			user === formData.userName.trim() &&
			usersData[user]["password"] === formData.password
		) {
			return { ...usersData[user], user };
		}
	}
	return false;
};
