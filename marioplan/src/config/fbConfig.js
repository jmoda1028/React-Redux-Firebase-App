import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyAEuvC7yNwgmF7udlKlf_UHfY1kSXI4iT8",
    authDomain: "net-ninja-marioplan-9fa53.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-9fa53.firebaseio.com",
    projectId: "net-ninja-marioplan-9fa53",
    storageBucket: "net-ninja-marioplan-9fa53.appspot.com",
    messagingSenderId: "361639850149",
    appId: "1:361639850149:web:eee5e80390304701de1d4c",
    measurementId: "G-TZ2H5XZBVQ"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(config);
  // firebase.analytics();
  // const firebaseApp = firebase.initializeApp(config);
  // export const firestore = firebaseApp.firestore();
  // firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase