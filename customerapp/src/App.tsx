import React from 'react';
import './App.css';
import Parent from './trials/Parent';
import Welcome from './trials/Welcome';
import WelcomeFC from './trials/WelcomeFC';

function App() {
  return (
    <div className="App">
      <h1>React Application</h1>
      <WelcomeFC />
      <WelcomeFC msg="Working FC comp">
        <h3>Child data!!!</h3>
      </WelcomeFC>
    </div>
  );
}

export default App;
