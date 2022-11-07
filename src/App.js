import React from 'react';

// import FetchData from './tests/fetch';
// import StateTest from './tests/state';
import AuthTest from './tests/auth/authenticate';
import Home from './pages/Home'
const App = () => {
  return (
    <div className="App">
      {/* <FetchData/> */}
      {/* <StateTest/> */}
       <AuthTest/>
      <Home />
    </div>
  );
}

export default App;
