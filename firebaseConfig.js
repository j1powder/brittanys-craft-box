import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
import "firebase/compat/storage"
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBltBPI7WPMoPJYqesN3mOTU2xsMflHK_M",
    authDomain: "brittanys-craft-box.firebaseapp.com",
    projectId: "brittanys-craft-box",
    storageBucket: "brittanys-craft-box.appspot.com",
    messagingSenderId: "636364530145",
    appId: "1:636364530145:web:8705d8bc1786006434b2a0"
  };

  //initialize
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
// initialize services
  const projectFirestore = firebase.firestore();
  const projectStorage = firebase.storage();
  const projectAuth = firebase.auth();
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectStorage, projectAuth, timestamp};