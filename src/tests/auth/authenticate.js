import React, { useState } from 'react';
import { auth } from '../../firebase/config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged  } from 'firebase/auth';

import './auth.css';

const AuthTest = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

return(<>
<div className="signup">
  <form>
    <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
    <input tyle="email" placeholder="Your Email"  onChange={e=>setEmail(e.target.value)}/>
    <input tyle="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)}/>
    <button type="submit">Create Account</button>
  </form>
</div>
</>);
};

export default AuthTest;