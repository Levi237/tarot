import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import './auth.css';

const AuthTest = ({ user }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
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
    // console.log(errorCode, "<=code | CREATE | message =>", errorMessage);
    setError(true);
    setErrorMessage(errorMessage)
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
    // console.log(errorCode, "<=code | SIGNIN | message =>", errorMessage);
    setError(true);
    setErrorMessage(errorMessage)
  });
};

const clearState = () => {
    setEmail('');
    setPassword('');
    hideModal();
    setshowSignIn(true);
}
const closeBtn = () => {
    hideModal();
    const loginBtn = document.getElementById('login-btn');
    loginBtn.style.display = 'inline-block';
}

const toggleCreateLogin = (e) => {
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
  }

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
                            { error && <span>uh oh!  {errorMessage}</span> }
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

export default AuthTest;