import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../environments/intialFirebase";
import { sagaActions } from "./sagaActions";

const { SIGNIN } = sagaActions;

signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in
		const user = userCredential.user;
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
	});
