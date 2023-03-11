// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0M8Kyd7aKf_DaLBZTM8mxA3V77jyrM64",
  authDomain: "petdatingapp-2c2ea.firebaseapp.com",
  databaseURL: "https://petdatingapp-2c2ea-default-rtdb.firebaseio.com",
  projectId: "petdatingapp-2c2ea",
  storageBucket: "petdatingapp-2c2ea.appspot.com",
  messagingSenderId: "163263718471",
  appId: "1:163263718471:web:4dd6d330b9c959adc4fd62",
  measurementId: "G-TBPD5GHCV4",
  storageBucket: 'gs://petdatingapp-2c2ea.appspot.com/' // Not sure if this works
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const storage = firebase.storage()

export { firebase };