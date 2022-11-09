import React, { useState, useEffect } from 'react';

import { auth }                       from './firebase/config';
import { onAuthStateChanged }         from 'firebase/auth';
import fs                             from './firebase/config';
import { collection, getDocs }        from 'firebase/firestore'; 

// import UpdateDeck                    from './tests/deck';
import AuthTest                       from './features/authentication';
import Home                           from './pages/Home';


const App = () => {

  const [deck, setDeck] = useState([]);
  const [user, setUser] = useState([]);
  // const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    //=> Get deck from deck collection doc
      fetchData();
  }, []);

  useEffect(() => {
    console.log("deck ==>", deck);
  }, [deck]);

  const fetchData = async () => {
    //=> Get deck from deck collection doc
      const getDeck = collection(fs, 'deck');
      const docSnap = await getDocs(getDeck);
      docSnap.forEach((doc) => {
          setDeck(doc.data().deck);
      });
  };

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
      {/* <UpdateDeck/> */}
      <AuthTest user={user} clickSignOut={clickSignOut}/>
      <Home />
    </div>
  );
}

export default App;
