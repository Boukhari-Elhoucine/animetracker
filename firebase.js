import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXd95LXtM-VDsr58a2FrCK-DAP0xaOhLQ",
  authDomain: "animetracker-580da.firebaseapp.com",
  projectId: "animetracker-580da",
  storageBucket: "animetracker-580da.appspot.com",
  messagingSenderId: "428108490421",
  appId: "1:428108490421:web:2e17dc04de795ff7ce80fc",
};
const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
