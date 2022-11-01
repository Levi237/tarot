import React from 'react';
import './App.css';

import FetchData from './tests/fetch';
import StateTest from './tests/state';

const App = () => {
  return (
    <div className="App">
      <FetchData/>
      <StateTest/>
    </div>
  );
}

export default App;
