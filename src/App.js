import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as routes from './constants/routes';

import { auth }                       from './firebase/config';
import { onAuthStateChanged }         from 'firebase/auth';
import fs                             from './firebase/config';
import { collection, getDocs }        from 'firebase/firestore'; 

import UserAuth                       from './components/authentication';
import Account                        from './pages/Account';
import Draw                           from './pages/Draw';
import Home                           from './pages/Home';
import Admin                          from './pages/Admin';
import NavMenu                        from './components/nav';

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
  };
  const openSignIn = (e) => {
    const modal = document.getElementById('auth-container');
    modal.style.opacity = 1;
    modal.style.marginTop = '0vh';
  };

  return (
    <div className="App">
      { user.uid && <div>{user.displayName ? user.displayName : user.email}</div> }
      <NavMenu user={user} clickSignOut={clickSignOut} openSignIn={openSignIn}/>
      <UserAuth user={user} clickSignOut={clickSignOut}/>
      <Routes>
          <Route path={routes.DRAW} exact element={<Draw deck={deck}/>}/>
          <Route path={routes.ACCT} exact element={<Account />}/>
          <Route path={routes.ROOT} exact element={<Home />}/>
          <Route path={routes.ROOT} element={<>wrong url</>}/>
        </Routes>
      { (user.uid === 'IcaB6QA5frhOaMWRf80gqxYF8Er2') && <Admin /> }
    </div>
  );
}

export default App;
