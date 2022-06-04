// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuZhHVwIYSXbmKkxEILwDzjadI-vSoSOM",
  authDomain: "uploadfile-b2f9f.firebaseapp.com",
  projectId: "uploadfile-b2f9f",
  storageBucket: "uploadfile-b2f9f.appspot.com",
  messagingSenderId: "1096007119370",
  appId: "1:1096007119370:web:4991278a5282ec77bae5f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);