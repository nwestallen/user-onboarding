import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

  const [users, setUsers] = useState([]);
  
  return (
    <div className="App">
      <h1>Hi friend</h1>
      <Form />
    </div>
  );
}

export default App;
