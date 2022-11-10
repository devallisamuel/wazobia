import React from 'react';
import { Routes,Route } from 'react-router-dom';

import { Login } from './components/pages/login';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Login/>}/>
    </Routes>
  );
}

export default App;
