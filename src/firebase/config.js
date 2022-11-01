import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


    const firebaseConfig = {
        apiKey: "AIzaSyDGqIRtuLUpdpME4SSOIM2EE8id5K_HGEY",
        authDomain: "tarot-app-2022.firebaseapp.com",
        databaseURL: "https://tarot-app-2022-default-rtdb.firebaseio.com",
        projectId: "tarot-app-2022",
        storageBucket: "tarot-app-2022.appspot.com",
        messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGER_ID}`,
        appId: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
        measurementId: "G-J7QY6BWRTV"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    const db = getFirestore(firebaseApp);


export default db;