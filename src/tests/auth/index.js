import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import './auth.css';

const AuthTest = ({user, clickSignOut}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [input, setInput] = useState(false);


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
    const modal = document.getElementById('auth-container');
    setTimeout(() => {
        modal.style.opacity = 0;
    }, 6000);
    setTimeout(() => {
        modal.style.marginTop = '-100vh';
    }, 12000);
}

const toggleCreateLogin = (e) => {
    if(input){
        setInput(false);
    } else {
        setInput(true);
    }
};


    return(
        <div id="auth-container" className="signup modal-window" onSubmit={input ? handleSignIn : handleCreateAccount}>
            <div className="modal-container">
            { (!user.uid) ?


                <div id="input-form" >
                    <h1>{input ? "Sign In" : "Create Account"}</h1>
                    <form>
                        <input type="email" placeholder="Your Email"  onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                        <button type="submit">Submit</button>
                        { error && <span>uh oh!  {errorMessage}</span> }
                    </form>
                    <section>
                        <p>{input ? "Don't have an account?" : "Already have an account?"}</p>
                        <button className="link-btn" onClick={toggleCreateLogin}>{input ? "Create Account" : "Sign in"}</button>
                    </section>
                </div>
            : 
            <>
            <h1>Welcome!</h1>
            <button onClick={clickSignOut}>Sign Out</button>
            </>
        }
        </div>
        </div>
    );
};

export default AuthTest;