import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
        authDomain: "tarot-app-2022.firebaseapp.com",
        databaseURL: "https://tarot-app-2022-default-rtdb.firebaseio.com",
        projectId: "tarot-app-2022",
        storageBucket: "tarot-app-2022.appspot.com",
        messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGER_ID}`,
        appId: `${process.env.REACT_APP_FIREBASE_API_ID}`,
        measurementId: "G-J7QY6BWRTV"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    export const auth = getAuth(firebaseApp);
    // const db = getDatabase(firebaseApp);
    const fs = getFirestore(firebaseApp);
    export default fs;