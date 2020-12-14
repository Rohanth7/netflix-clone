import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyC-Xhz3b8VMiRNT-XdjUk-d_0LcrmprAlE",
  authDomain: "netflix-e21d7.firebaseapp.com",
  projectId: "netflix-e21d7",
  storageBucket: "netflix-e21d7.appspot.com",
  messagingSenderId: "973322728822",
  appId: "1:973322728822:web:49d990c69243941d6af657"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);


export { firebase };
