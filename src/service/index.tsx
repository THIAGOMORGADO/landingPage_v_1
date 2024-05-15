
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDQ1E33NcGvLeGwuJk_fRcwbRVvcGBaut0",
    authDomain: "portifolio-e1bc7.firebaseapp.com",
    projectId: "portifolio-e1bc7",
    storageBucket: "portifolio-e1bc7.appspot.com",
    messagingSenderId: "1034799786493",
    appId: "1:1034799786493:web:4313b2e2939c1a608a5194",
    measurementId: "G-5G1FEBPM19"

};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db, app}
export default app;
// Initialize Firebase



