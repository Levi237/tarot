import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import './auth.css';

const Login = ({ user }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSignIn, setshowSignIn] = useState(true);


const handleCreateAccount = (e) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //==> Signed in 
    const user = userCredential.user;
    clearState();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(true);
    setErrorCode(errorCode);
    setErrorMessage(errorMessage);
  });
};

const handleSignIn = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //==> Signed in 
    const user = userCredential.user;
    clearState();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(true);
    setErrorCode(errorCode);
    setErrorMessage(errorMessage);
  });
};

const clearState = () => {
    setEmail('');
    setPassword('');
    hideModal();
    setshowSignIn(true);
};

const closeBtn = () => {
  //=> Hide modal and redisplay login butto
    hideModal();
    const loginBtn = document.getElementById('login-btn');
    loginBtn.style.display = 'inline-block';
};

const toggleCreateLogin = (e) => {
  //=> Show either Sign In or Create Account
    if(showSignIn){
        setshowSignIn(false);
    } else {
        setshowSignIn(true);
    }
};

const hideModal = () => {
  const modal = document.getElementById('auth-container');
  modal.style.opacity = 0;
  setTimeout(() => {
      modal.style.marginTop = '-100vh';
  }, 1000);
};

  return(
    <div 
      id="auth-container" 
      className="signup modal-window" 
      onSubmit={showSignIn ? handleSignIn : handleCreateAccount}
      style={{opacity: '0', marginTop: '-100vh'}}
      >
      <div className="modal-container">
        <button className="close-btn" onClick={closeBtn}>X</button>
        { user.uid ?
          <>
            <h1>Welcome!</h1>
          </>
        :
          <div id="input-form" >
            <h1>{showSignIn ? "Sign In" : "Create Account"}</h1>
            <form>
                <input type="email" placeholder="Your Email"  onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
                  <center className="error">&nbsp;
                  { error && 
                    <>
                      uh oh!&nbsp;
                      {/* Sign In Error Messages */}
                      {( errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found' ) && 'incorrect email/password' }
                      {( errorCode === 'auth/internal-error' && password === '' || errorCode === 'auth/invalid-email' && email === '' ) && 'needs email/password' }
                      {/* Create Account Error Messages */}
                      {( errorCode === 'auth/weak-password' ) && 'use stronger password' }
                      {( errorCode === 'email-already-in-use' ) && 'email already in use' }
                    </>
                  }
                  &nbsp;</center>
            </form>
            <section>
              <p>{showSignIn ? "Don't have an account?" : "Already have an account?"}</p>
              <button className="link-btn" onClick={toggleCreateLogin}>{showSignIn ? "Create Account" : "Sign in"}</button>
            </section>
          </div>
        }
      </div>
    </div>
  );
};

export default Login;