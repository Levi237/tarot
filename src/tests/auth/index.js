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
}

const toggleCreateLogin = (e) => {
    if(input){
        setInput(false);
    } else {
        setInput(true);
    }
};


    return(
        <div className="signup modal-window" onSubmit={input ? handleSignIn : handleCreateAccount}>
            { (!user.uid) ?

            <div className="modal-container">
                <div id="input-form" >
                    <h1>{input ? "Sign In" : "Create Account"}</h1>
                    <form>
                        <input type="email" placeholder="Your Email"  onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                        <button type="submit">Submit</button>
                        { error && <>uh oh!  error</> }
                    </form>
                    <section>
                        <p>{input ? "Don't have an account?" : "Already have an account?"}</p>
                        <button className="link-btn" onClick={toggleCreateLogin}>{input ? "Create Account" : "Sign in"}</button>
                    </section>
                </div>
            </div>
            : 
            <button onClick={clickSignOut}>Sign Out</button>
            }
        </div>
    );
};

export default AuthTest;