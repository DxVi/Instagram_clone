import firebase from "firebase";

//insert code from firebase here...
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-zGgaTQ7KoKuaKKJo_77RJIq7qLkhbV8",
    authDomain: "instagram-clone-fb953.firebaseapp.com",
    databaseURL: "https://instagram-clone-fb953.firebaseio.com",
    projectId: "instagram-clone-fb953",
    storageBucket: "instagram-clone-fb953.appspot.com",
    messagingSenderId: "22394061237",
    appId: "1:22394061237:web:007f51c894f366e16159fc",
    measurementId: "G-DF9KL83FG3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig )

const db = firebaseApp.firestore();

export default db;

