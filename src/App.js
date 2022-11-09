import React, { useState } from 'react';

import { auth } from './firebase/config';
import { onAuthStateChanged } from "firebase/auth";

import FetchData from './tests/fetch';
import DeckInfo from './tests/deck';
import AuthTest from './tests/auth/';
import Home from './pages/Home'
import { click } from '@testing-library/user-event/dist/click';
const App = () => {

const [user, setUser] = useState([]);
// const [signIn, setSignIn] = useState(false);

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
      const loginBtn = document.getElementById('login-btn');
      loginBtn.style.display = 'inline-block';
};
const openSignIn = (e) => {
  const modal = document.getElementById('auth-container');
  modal.style.opacity = 1;
  modal.style.marginTop = '0vh';
  const loginBtn = document.getElementById('login-btn');
  loginBtn.style.display = 'none';
};

  return (
    <div className="App">
      { user.uid && <button className="signout-home" onClick={clickSignOut}>Sign Out</button> }
      { user.uid && <div>{user.displayName ? user.displayName : user.email}</div> }
      <button id="login-btn" onClick={openSignIn} >Login</button>
      <FetchData/>
      <DeckInfo/>
      <AuthTest user={user} clickSignOut={clickSignOut}/>
      <Home />
    </div>
  );
}

export default App;
