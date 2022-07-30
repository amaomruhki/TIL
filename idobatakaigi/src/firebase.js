import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDtrq6Cz1CfjTkey28aBMYtvYlBweWjQjw",
	authDomain: "idobatakaigi-with-9646.firebaseapp.com",
	databaseURL: "https://idobatakaigi-with-9646-default-rtdb.firebaseio.com/",
	projectId: "idobatakaigi-with-9646",
	storageBucket: "idobatakaigi-with-9646.appspot.com",
	messagingSenderId: "240431481755",
	appId: "1:240431481755:web:e4b0821907c958006f973e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
	messagesRef.push({ name, text });
};
