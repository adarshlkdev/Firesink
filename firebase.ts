import {getApp , getApps , initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your_api_key",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "482207260584",
  appId: "1:482207260584:web:1c344187c262ea0ccf879d"
};

// Initialize Firebase
const app =  getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db , storage };
