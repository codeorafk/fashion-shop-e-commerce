import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCavuZJockmOeJ_1AWOUv0Gb0xNHBmr3dA",
  authDomain: "fashionshop-dfa38.firebaseapp.com",
  databaseURL: "https://fashionshop-dfa38-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fashionshop-dfa38",
  storageBucket: "fashionshop-dfa38.appspot.com",
  messagingSenderId: "348861059662",
  appId: "1:348861059662:web:edb39670da32eb25d3e91f",
  measurementId: "G-NFHXZ8QV9H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
