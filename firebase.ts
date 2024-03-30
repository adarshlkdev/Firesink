import {getApp , getApps , initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACIrICqn0nHPaS93nMU5SqXbhw8HXj5yY",
  authDomain: "firesink-23bfc.firebaseapp.com",
  projectId: "firesink-23bfc",
  storageBucket: "firesink-23bfc.appspot.com",
  messagingSenderId: "482207260584",
  appId: "1:482207260584:web:1c344187c262ea0ccf879d"
};

// Initialize Firebase
const app =  getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db , storage };
