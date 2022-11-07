import React, { useState } from 'react';

import { auth } from './firebase/config';
import { onAuthStateChanged } from "firebase/auth";

// import FetchData from './tests/fetch';
// import StateTest from './tests/state';
import AuthTest from './tests/auth/';
import Home from './pages/Home'
import { click } from '@testing-library/user-event/dist/click';
const App = () => {

const [user, setUser] = useState([]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("user.uid =>", user.uid);
      setUser(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const clickSignOut = (e) => {
    auth.signOut().then(function() {
        console.log('Signed Out');
        setUser([]);
      }, function(error) {
        console.error('Sign Out Error', error);
      });
};

  return (
    <div className="App">
      { user ? <div>{user.displayName ? user.displayName : user.email}</div> : <div>Login</div>}
      {/* <FetchData/> */}
      {/* <StateTest/> */}
      <Home />
      <AuthTest user={user} clickSignOut={clickSignOut}/>
    </div>
  );
}

export default App;
