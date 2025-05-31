// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnUkr50uSeOA8KvH_wb_coxPFnhAjlAt4",
    authDomain: "dragon-news-f314a.firebaseapp.com",
    projectId: "dragon-news-f314a",
    storageBucket: "dragon-news-f314a.firebasestorage.app",
    messagingSenderId: "9940055430",
    appId: "1:9940055430:web:59806460399ae6757e6807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth