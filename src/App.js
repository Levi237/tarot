import React, { useState } from 'react';

import { auth } from './firebase/config';
import { onAuthStateChanged } from "firebase/auth";

// import FetchData from './tests/fetch';
// import StateTest from './tests/state';
import AuthTest from './tests/auth/';
import Home from './pages/Home'
const App = () => {

const [user, userState] = useState([]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("user.uid =>", user.uid);
      userState(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div className="App">
      { user ? <div>{user.displayName ? user.displayName : user.email}</div> : <div>Login</div>}
      {/* <FetchData/> */}
      {/* <StateTest/> */}
      <Home />
      <AuthTest user={user}/>
    </div>
  );
}

export default App;
