// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAhy_HwCBQLGqHqgEpjKTqeHGi-41qiQVI",
//   authDomain: "myportfolio-5b7d7.firebaseapp.com",
//   projectId: "myportfolio-5b7d7",
//   storageBucket: "myportfolio-5b7d7.appspot.com",
//   messagingSenderId: "317866774774",
//   appId: "1:317866774774:web:16e9cf3ff9957a2c2f9cd7",
//   measurementId: "G-MNP3YPZRMT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAhy_HwCBQLGqHqgEpjKTqeHGi-41qiQVI",
  authDomain: "myportfolio-5b7d7.firebaseapp.com",
  projectId: "myportfolio-5b7d7",
  storageBucket: "myportfolio-5b7d7.appspot.com",
  messagingSenderId: "317866774774",
  appId: "1:317866774774:web:16e9cf3ff9957a2c2f9cd7",
  measurementId: "G-MNP3YPZRMT"
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export { functions };
