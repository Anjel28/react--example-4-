import React from 'react';
import './App.css';
import Customer from './components/Customer'

function App() {
  
  return (
  <div >
   <Customer  text="typescript" onClick={() => console.log('button clicked')} /*text="Click me" 
  onClick={() => console.log('Button clicked')}*/ />
  
  
         
       
      
  </div>
  );
}

export default App;
