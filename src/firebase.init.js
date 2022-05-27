import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCZMcVtxsmcUTe23nfYfcyORTeTFDMH5go",
	authDomain: "jerins-parlourbd.firebaseapp.com",
	projectId: "jerins-parlourbd",
	storageBucket: "jerins-parlourbd.appspot.com",
	messagingSenderId: "591467178414",
	appId: "1:591467178414:web:f50012b35b642702c4803f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
