import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDt2YaksreOo-LchDwpj2yTeaUQASGd_Bs",
  authDomain: "react-slack-clone-greg.firebaseapp.com",
  databaseURL: "https://react-slack-clone-greg.firebaseio.com",
  projectId: "react-slack-clone-greg",
  storageBucket: "react-slack-clone-greg.appspot.com",
  messagingSenderId: "781880430336",
  appId: "1:781880430336:web:4b0534870018c401"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;