import firebase from 'firebase/app';
import  "firebase/auth";
import  "firebase/storage";
import 'firebase/database';


var firebaseConfig = {
apiKey: "AIzaSyBZpIoAnZXAZDN357LQ6aLIRn0QzZ-mj2E",
authDomain: "olx-clone-syed-muzammil.firebaseapp.com",
databaseURL: "https://olx-clone-syed-muzammil.firebaseio.com",
projectId: "olx-clone-syed-muzammil",
storageBucket: "olx-clone-syed-muzammil.appspot.com",
messagingSenderId: "392260595491",
appId: "1:392260595491:web:2297a61c6baa2b69e8a696",
measurementId: "G-7NFRJX06LL"
};


firebase.initializeApp(firebaseConfig);

export default firebase;