import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import './auth.css';

const AuthTest = ({user}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [input, setInput] = useState(false);


const handleCreateAccount = (e) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode, "<=code | message =>", errorMessage);
    setError(true)
  });
};

const handleSignIn = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

const toggleCreateLogin = (e) => {
    // e.preventDefault();
    if(input){
        setInput(false);
    } else {
        setInput(true);
    }
};

const showWelcome = (e) => {
    console.log("clicked submit, trigger showWelcome");
    const modal = document.getElementById('signup-modal');
    if (!error) { 
        modal.style.display = 'none';
    }
}
    return(
        <div id="signup-modal" className="signup modal-window" onSubmit={input ? handleSignIn : handleCreateAccount}>
            <div className="modal-container">
                <h1>{input ? "Sign In" : "Create Account"}</h1>
                <form>
                    <input type="email" placeholder="Your Email"  onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={showWelcome}>Submit</button>
                    { error && <>uh oh!  error</> }
                </form>
                <section>
                    <p>{input ? "Don't have an account?" : "Already have an account?"}</p>
                    <button className="link-btn" onClick={toggleCreateLogin}>{input ? "Create Account" : "Sign in"}</button>
                </section>
            </div>
        </div>
    );
};

export default AuthTest;