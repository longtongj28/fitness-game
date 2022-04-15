import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAO-VS74p-qDemJfE17l1uzG1nX2oOOcp8",
  authDomain: "fitzone-9db05.firebaseapp.com",
  projectId: "fitzone-9db05",
  storageBucket: "fitzone-9db05.appspot.com",
  messagingSenderId: "920105236526",
  appId: "1:920105236526:web:9f37665275d80b6d8dc7bf",
  measurementId: "G-EEPNV6LMP8"
};

const app = initializeApp(firebaseConfig);




export const auth = getAuth(app);
const provider = new GoogleAuthProvider()

auth.onAuthStateChanged(user => {

  console.log(user)
  
  })

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

