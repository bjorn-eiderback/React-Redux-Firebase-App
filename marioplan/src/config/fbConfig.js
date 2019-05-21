import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyC8RyzSZNiUiYv94kg9GnJ3iKcH1YH5_Wk",
  authDomain: "net-ninja-marioplan-4a847.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-4a847.firebaseio.com",
  projectId: "net-ninja-marioplan-4a847",
  storageBucket: "net-ninja-marioplan-4a847.appspot.com",
  messagingSenderId: "1067687245676",
  appId: "1:1067687245676:web:0800496d9185917b"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 