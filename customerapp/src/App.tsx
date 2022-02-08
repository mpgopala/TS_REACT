import React from 'react';
import './App.css';
import CustomerList from './components/CustomerList';
import EffectHook from './hooks/EffectHook';
import ReducerComponent from './hooks/ReducerComponent';
import StateHookComponent from './hooks/StateHookComponent';
import UseRefComponent from './hooks/UseRefComponent';
 
function App() {
  return (
    <div className="App">
      <h1>React Application</h1>
     {/* <CustomerList /> */}
     {/* <StateHookComponent /> */}
     {/* <ReducerComponent/> */}
     {/* <EffectHook/> */}
     <UseRefComponent/>
    </div>
  );
}

export default App;
